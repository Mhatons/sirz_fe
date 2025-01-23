
// interface Idata {
//     title: string,
//     desc: string,
//     image: string
// }

// export default function Card(props: Idata) {
//     const { title, desc, image } = props;

//     return (
//         <div className=" cursor-pointer relative cardcontainer overflow-y-hidden mb-4 rounded-3xl h-[250px]">
//             <img src={image} alt="" className=' w-full object-cover h-full rounded-3xl' />
//             <div className=" absolute top-0 left-0 right-0 bottom-0  m-auto text-center cardButtonContainer flex items-center justify-center">
//                 <h4 className=' bg-[#2a84a0dd] text-white text-sm font-semibold max-w-[70%] p-2 rounded-sm'>{title}</h4>
//             </div>
//             <div className=' text-[16px]  text-white cardtext absolute bottom-0 p-2 rounded-t-3xl w-[90%] m-auto text-center hover:text-white'>
//                 <h4 className=' text-[18px] font-semibold pt-9'>{title}</h4>
//                 <div className='cardtext_desc text-zinc-400 pt-2'>{desc}</div>
//             </div>
//         </div>
//     )
// }






import React, { useRef } from 'react';

// Provided IntersectionObserver hook
const useIntersectionObserver = () => {
  const [visibleSections, setVisibleSections] = React.useState<string[]>([]);
  const refMap = useRef<Map<string, HTMLElement>>(new Map());

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, sectionId])]);
          } else {
            setVisibleSections((prev) => prev.filter((id) => id !== sectionId));
          }
        });
      },
      { threshold: 0.5 }
    );

    refMap.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const registerRef = (id: string, ref: HTMLElement | null) => {
    if (ref) refMap.current.set(id, ref);
  };

  return { visibleSections, registerRef };
};

interface Idata {
  title: string;
  desc: string;
  image: string;
}

export default function Card(props: Idata) {
  const { title, desc, image } = props;
  const { visibleSections, registerRef } = useIntersectionObserver();

  const cardId = `card-${title.replace(/\s+/g, '-')}`; // Create a unique ID for each card
  
  return (
    <div
      id={cardId}
      ref={(el) => registerRef(cardId, el)} // Register the card reference for intersection observation
      className={`cursor-pointer relative cardcontainer overflow-y-hidden mb-4 rounded-3xl h-[250px] ${
        visibleSections.includes(cardId) ? 'hovered' : ''
      }`}
    >
      <img src={image} alt={title} className="w-full object-cover h-full rounded-3xl" />
      <div className="absolute top-0 left-0 right-0 bottom-0 m-auto text-center cardButtonContainer flex items-center justify-center">
        <h4 className="bg-[#2a84a0dd] text-white text-sm font-semibold max-w-[70%] p-2 rounded-sm">{title}</h4>
      </div>
      <div className="text-[16px] text-white cardtext absolute bottom-0 p-2 rounded-t-3xl w-[90%] m-auto text-center hover:text-white">
        <h4 className="text-[18px] font-semibold pt-9">{title}</h4>
        <div className="cardtext_desc text-zinc-400 pt-2">{desc}</div>
      </div>
    </div>
  );
}
