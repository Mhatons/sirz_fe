import { SERVICES } from "../assets";

// export const ServiceDetails = {
//     IndustrialCleaning: {
//         image: SERVICES.IndustrialCleaningBg,
//         title: "Industrial cleaning",
//         description: "Our industrial cleaning services prioritize precision and care, ensuring every corner is spotless and hygienic. From residential to commercial spaces, we deliver exceptional results with eco-friendly practices.",
//         sectionOne: {
//             title: "Precise & Thorough",
//             description: `Our industrial cleaning team is dedicated to delivering thorough and efficient cleaning services tailored to both residential and commercial spaces. We ensure that every surface, from furniture to fixtures, is meticulously cleaned, creating a healthier and more welcoming environment.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },
//         sectionTwo: {
//             title: "Eco-friendly too",
//             description: `With advanced cleaning techniques and eco-friendly products, we address even the most challenging cleaning tasks. Whether it's routine maintenance or a deep-clean project, our focus remains on achieving exceptional results that exceed client expectations.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },

//     },
//     MaintenanceTreatment: {
//         image: SERVICES.IndustrialTreatmentBg,
//         title: "Maintenance & Treatment",
//         description: `Preserve the quality and functionality of your spaces with our tailored maintenance services and scheduled treatments. These proactive care solutions ensure lasting durability, safeguard your furnishings, and maintain the aesthetic appeal of your interiors year-round.`,
//         sectionOne: {
//             title: "attention to details",
//             description: `Our maintenance and treatment services are designed to preserve the longevity and quality of your spaces and furnishings. From minor repairs to comprehensive upkeep, we ensure your environment remains functional and visually appealing. Each service is tailored to meet the specific needs of your residential or commercial property.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },
//         sectionTwo: {
//             title: "Routine treatment",
//             description: `Routine treatment is essential to maintain the integrity and appearance of your furniture, floors, and other assets. Our team offers scheduled, timely interventions, including preventive care and protective treatments, to ensure your space remains in pristine condition year-round.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },

//     },
//     InteriorDesignConsultation: {
//         image: SERVICES.consultationBg,
//         title: "Design Consultation",
//         description: `Our Professional Design Consultation service offers expert guidance in creating personalized spaces that align with your vision, needs, and budget. 
//         We assist with everything from material selection to project execution, ensuring practical and aesthetic solutions.`,
//         sectionOne: {
//             title: "We listen",
//             description: `Our team offers personalized design consultations that blend expert advice and tailored recommendations. 
//             Whether you're planning a full renovation or looking for design inspiration, we listen to your needs and offer solutions that align with your aesthetic preferences and functional requirements. 
//             From material selection to space utilization, we ensure every aspect of your project is considered, offering both creative ideas and professional insight to guide you through the design process.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },
//         sectionTwo: {
//             title: "We put you first",
//             description: `To make your design vision a reality, we also provide expert recommendations on execution, timelines, and cost-effective strategies. 
//             From initial concept to final touches, our goal is to create spaces that are not only visually appealing but also enhance your lifestyle or business operations. 
//             With our guidance, you can confidently navigate the design process, knowing that every decision is made with both creativity and practicality in mind.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },

//     },
//     SpacePlanning: {
//         image: SERVICES.spacePlanning,
//         title: "Space Planning",
//         description: `Effective space planning combines functionality and aesthetics to create balanced layouts. Our team optimizes every area, ensuring practicality and seamless alignment with your goals.`,
//         sectionOne: {
//             title: "Expert Professionals",
//             description: `Our expertise extends to a variety of settings, including residential, commercial, and mixed-use spaces. 
//             Whether it’s a compact studio apartment or a sprawling corporate office, we implement creative strategies to optimize the use of available square footage. By analyzing spatial relationships, we ensure that every corner serves a purpose, supporting both comfort and productivity.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },
//         sectionTwo: {
//             title: "Client Focused",
//             description: `At the heart of our approach is collaboration with our clients. We take the time to understand your vision, preferences, and unique requirements. From initial concept development to detailed layout plans, 
//             we provide tailored solutions that reflect your individuality while adhering to the highest standards of functionality and design excellence.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },

//     },
//     Procurement: {
//         image: SERVICES.officeBg,
//         title: "Procurement",
//         description: "Our interior design and procurement team dedicates significant time and effort to meticulously selecting and sourcing furniture, fittings, and accessories.",
//         sectionOne: {
//             title: "Nothing short of excellence",
//             description: `Our interior design and procurement team dedicate significant time and effort to meticulously selecting and sourcing the finest furniture, 
//             fittings, and accessories to align with the unique vision and requirements of each project. By combining a keen eye for design trends, an in-depth understanding of materials, 
//             and established relationships with trusted suppliers and manufacturers, we ensure every piece is of exceptional quality and perfectly complements the overall aesthetic and functionality of the space. 
//             This attention to detail guarantees a cohesive and personalized environment that reflects our clients' preferences and enhances their living or working experience.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },
//         sectionTwo: {
//             title: "Cost friendly",
//             description: `In addition to sourcing, our team carefully curates items that meet both style and durability standards, ensuring they harmonize with the overall design concept. 
//             We prioritize selecting pieces that not only elevate the visual appeal but also provide comfort and practicality for everyday use. Our procurement process includes negotiating with vendors to secure the best quality at competitive prices, 
//             enabling us to deliver value without compromising on excellence. From bespoke furniture to unique accessories, every detail is thoughtfully considered to transform spaces into timeless and inspiring environments tailored to our clients' needs.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },

//     },
//     CurtainsWindowBlinds: {
//         image: SERVICES.curtainsBlindsBg,
//         title: "Curtains & Window blinds",
//         description: "Our curtains and window blinds are expertly crafted in Turkey and selected specifically for the Nigerian climate. Designed to endure heat and humidity, they offer long-lasting durability and vibrant color retention without fading",
//         sectionOne: {
//             title: "Best Turkish Fabrics",
//             description: `Our curtains and window blinds are meticulously crafted in Turkey, known for its high-quality textile production. We carefully select each piece to ensure it is perfectly suited for the unique demands of the Nigerian climate. 
//             These products are designed to withstand the heat and humidity typical in the region, offering superior durability. With this careful selection process, our curtains and blinds retain their vibrant colors and elegant appeal for years, even in challenging weather conditions, ensuring that your interiors always look fresh and stylish without the risk of fading.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },
//         sectionTwo: {
//             title: "installation Services",
//             description: `In addition to providing high-quality curtains and window blinds, we also offer professional installation services. Our experienced team ensures precise and efficient fitting, tailored to your space for optimal functionality and aesthetics. From measuring to installation, we handle every step with attention to detail, ensuring a seamless and hassle-free experience. Whether it's a residential or commercial space, we guarantee that your curtains and blinds will be installed to perfection, enhancing the overall look and feel of your interiors.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },

//     },
//     // WallpaperPainting: {
//     //     image: SERVICES.IndustrialCleaningBg,
//     //     title: "3D WallPaper and Painting",
//     //     description: "Application of wallpapers, specialized paints, and ceiling designs to enhance interior spaces.",
//     //     sectionOne: {
//     //         title: "Industrial cleaning",
//     //         description: "Deligent and thorough cleaning on all furniture, curtains including offices and residentail spaces ",
//     //         image: SERVICES.IndustrialCleaningBg,
//     //     },
//     //     sectionTwo: {
//     //         title: "Industrial cleaning",
//     //         description: "Deligent and thorough cleaning on all furniture, curtains including offices and residentail spaces ",
//     //         image: SERVICES.IndustrialCleaningBg,
//     //     },

//     // },
//     Signage: {
//         image: SERVICES.IndustrialCleaningBg,
//         title: "Custom Signage",
//         description: "We create custom signage that enhances your brand's identity and functionality, tailored for corporate and residential clients. Our expert installation ensures your signage is securely placed and seamlessly integrated into your space.",
//         sectionOne: {
//             title: "Bespoke Signage Design",
//             description: `We specialize in the design and fabrication of custom signage tailored to your brand or project needs. 
//             Whether for corporate, residential, or commercial spaces, our team creates visually impactful signs that not only reflect your identity but also serve as functional and engaging elements within the environment.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },
//         sectionTwo: {
//             title: "Expert Signage Installation",
//             description: `Our services extend beyond design, offering professional installation of all types of signage. 
//             From indoor to outdoor installations, our skilled team ensures that your signage is securely placed and visually striking, making it an integral part of your space's overall design.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },

//     },
//     // FlooringSolutions: {
//     //     image: SERVICES.flooringImg,
//     //     title: "Flooring Solutions",
//     //     description: "Installation of tiles, parquet, and interlocking systems to suit various design styles.",
//     //     sectionOne: {
//     //         title: "Industrial cleaning",
//     //         description: "Deligent and thorough cleaning on all furniture, curtains including offices and residentail spaces ",
//     //         image: SERVICES.IndustrialCleaningBg,
//     //     },
//     //     sectionTwo: {
//     //         title: "Industrial cleaning",
//     //         description: "Deligent and thorough cleaning on all furniture, curtains including offices and residentail spaces ",
//     //         image: SERVICES.IndustrialCleaningBg,
//     //     },

//     // },
//     // Pop: {
//     //     image: SERVICES.popImg,
//     //     title: "Plaster of Paris (POP)",
//     //     description: "Creating decorative elements for ceilings and walls.",

//     // },
//     ProjectManagement: {
//         image: SERVICES.projectManagementBg,
//         title: "Project Management",
//         description: `Our design team oversees every phase of the project, from the initial concept through to installation and final completion. 
//         We actively participate in regular site meetings, ensuring that our designs are being implemented precisely according to the specifications`,
//         sectionOne: {
//             title: "On-Time, On-Budget Execution",
//             description: `We are committed to delivering projects within the agreed-upon timelines and budgets. 
//             Our dedicated project management team closely monitors progress, addresses any challenges promptly, and coordinates all aspects of the project to ensure efficient execution. 
//             By maintaining open communication with all involved parties, we ensure that the project proceeds smoothly, on time, and within financial constraints.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },
//         sectionTwo: {
//             title: "Turn-Key Solutions",
//             description: `In line with our comprehensive service approach, we offer turn-key solutions that cover all aspects of the project. 
//             From design and procurement to installation and final handover, our team manages every detail, ensuring a seamless and hassle-free experience for our clients. 
//             With our turn-key solutions, clients can rely on us for a complete, fully realized interior project, executed with precision and care.`,
//             image: SERVICES.IndustrialCleaningBg,
//         },

//     },
// }







export const ServiceDetails = [
  {
    name: "IndustrialCleaning",
    image: SERVICES.IndustrialCleaningBg,
    title: "Industrial cleaning",
    description: "Our industrial cleaning services prioritize precision and care, ensuring every corner is spotless and hygienic. From residential to commercial spaces, we deliver exceptional results with eco-friendly practices.",
    sections: [
      {
        title: "Precise & Thorough",
        description: "Our industrial cleaning team is dedicated to delivering thorough and efficient cleaning services tailored to both residential and commercial spaces. We ensure that every surface, from furniture to fixtures, is meticulously cleaned, creating a healthier and more welcoming environment.",
        image: SERVICES.IndustrialCleaningBg,
      },
      {
        title: "Eco-friendly too",
        description: "With advanced cleaning techniques and eco-friendly products, we address even the most challenging cleaning tasks. Whether it's routine maintenance or a deep-clean project, our focus remains on achieving exceptional results that exceed client expectations.",
        image: SERVICES.IndustrialCleaningBg,
      },
    ],
  },
  {
    name: "MaintenanceTreatment",
    image: SERVICES.IndustrialTreatmentBg,
    title: "Maintenance & Treatment",
    description: "Preserve the quality and functionality of your spaces with our tailored maintenance services and scheduled treatments. These proactive care solutions ensure lasting durability, safeguard your furnishings, and maintain the aesthetic appeal of your interiors year-round.",
    sections: [
      {
        title: "Attention to details",
        description: "Our maintenance and treatment services are designed to preserve the longevity and quality of your spaces and furnishings. From minor repairs to comprehensive upkeep, we ensure your environment remains functional and visually appealing. Each service is tailored to meet the specific needs of your residential or commercial property.",
        image: SERVICES.IndustrialCleaningBg,
      },
      {
        title: "Routine treatment",
        description: "Routine treatment is essential to maintain the integrity and appearance of your furniture, floors, and other assets. Our team offers scheduled, timely interventions, including preventive care and protective treatments, to ensure your space remains in pristine condition year-round.",
        image: SERVICES.IndustrialCleaningBg,
      },
    ],
  },
  {
    name: "InteriorDesignConsultation",
    image: SERVICES.consultationBg,
    title: "Design Consultation",
    description: "Our Professional Design Consultation service offers expert guidance in creating personalized spaces that align with your vision, needs, and budget. We assist with everything from material selection to project execution, ensuring practical and aesthetic solutions.",
    sections: [
      {
        title: "We listen",
        description: "Our team offers personalized design consultations that blend expert advice and tailored recommendations. Whether you're planning a full renovation or looking for design inspiration, we listen to your needs and offer solutions that align with your aesthetic preferences and functional requirements. From material selection to space utilization, we ensure every aspect of your project is considered, offering both creative ideas and professional insight to guide you through the design process.",
        image: SERVICES.IndustrialCleaningBg,
      },
      {
        title: "We put you first",
        description: "To make your design vision a reality, we also provide expert recommendations on execution, timelines, and cost-effective strategies. From initial concept to final touches, our goal is to create spaces that are not only visually appealing but also enhance your lifestyle or business operations. With our guidance, you can confidently navigate the design process, knowing that every decision is made with both creativity and practicality in mind.",
        image: SERVICES.IndustrialCleaningBg,
      },
    ],
  },
  {
    name: "SpacePlanning",
    image: SERVICES.spacePlanning,
    title: "Space Planning",
    description: "Effective space planning combines functionality and aesthetics to create balanced layouts. Our team optimizes every area, ensuring practicality and seamless alignment with your goals.",
    sections: [
      {
        title: "Expert Professionals",
        description: "Our expertise extends to a variety of settings, including residential, commercial, and mixed-use spaces. Whether it’s a compact studio apartment or a sprawling corporate office, we implement creative strategies to optimize the use of available square footage. By analyzing spatial relationships, we ensure that every corner serves a purpose, supporting both comfort and productivity.",
        image: SERVICES.IndustrialCleaningBg,
      },
      {
        title: "Client Focused",
        description: "At the heart of our approach is collaboration with our clients. We take the time to understand your vision, preferences, and unique requirements. From initial concept development to detailed layout plans, we provide tailored solutions that reflect your individuality while adhering to the highest standards of functionality and design excellence.",
        image: SERVICES.IndustrialCleaningBg,
      },
    ],
  },
  {
    name: "Procurement",
    image: SERVICES.officeBg,
    title: "Procurement",
    description: "Our interior design and procurement team dedicates significant time and effort to meticulously selecting and sourcing furniture, fittings, and accessories.",
    sections: [
      {
        title: "Nothing short of excellence",
        description: "Our interior design and procurement team dedicate significant time and effort to meticulously selecting and sourcing the finest furniture, fittings, and accessories to align with the unique vision and requirements of each project. By combining a keen eye for design trends, an in-depth understanding of materials, and established relationships with trusted suppliers and manufacturers, we ensure every piece is of exceptional quality and perfectly complements the overall aesthetic and functionality of the space. This attention to detail guarantees a cohesive and personalized environment that reflects our clients' preferences and enhances their living or working experience.",
        image: SERVICES.IndustrialCleaningBg,
      },
      {
        title: "Cost friendly",
        description: "In addition to sourcing, our team carefully curates items that meet both style and durability standards, ensuring they harmonize with the overall design concept. We prioritize selecting pieces that not only elevate the visual appeal but also provide comfort and practicality for everyday use. Our procurement process includes negotiating with vendors to secure the best quality at competitive prices, enabling us to deliver value without compromising on excellence. From bespoke furniture to unique accessories, every detail is thoughtfully considered to transform spaces into timeless and inspiring environments tailored to our clients' needs.",
        image: SERVICES.IndustrialCleaningBg,
      },
    ],
  },
  {
    name: "CurtainsWindowBlinds",
    image: SERVICES.curtainsBlindsBg,
    title: "Curtains & Window blinds",
    description: "Our curtains and window blinds are expertly crafted in Turkey and selected specifically for the Nigerian climate. Designed to endure heat and humidity, they offer long-lasting durability and vibrant color retention without fading.",
    sections: [
      {
        title: "Best Turkish Fabrics",
        description: "Our curtains and window blinds are meticulously crafted in Turkey, known for its high-quality textile production. We carefully select each piece to ensure it is perfectly suited for the unique demands of the Nigerian climate. These products are designed to withstand the heat and humidity typical in the region, offering superior durability. With this careful selection process, our curtains and blinds retain their vibrant colors and elegant appeal for years, even in challenging weather conditions, ensuring that your interiors always look fresh and stylish without the risk of fading.",
        image: SERVICES.IndustrialCleaningBg,
      },
      {
        title: "Installation Services",
        description: "In addition to providing high-quality curtains and window blinds, we also offer professional installation services. Our experienced team ensures precise and efficient fitting, tailored to your space for optimal functionality and aesthetics. From measuring to installation, we handle every step with attention to detail, ensuring a seamless and hassle-free experience. Whether it's a residential or commercial space, we guarantee that your curtains and blinds will be installed to perfection, enhancing the overall look and feel of your interiors.",
        image: SERVICES.IndustrialCleaningBg,
      },
    ],
  },
  {
    name: "Signage",
    image: SERVICES.IndustrialCleaningBg,
    title: "Custom Signage",
    description: "We create custom signage that enhances your brand's identity and functionality, tailored for corporate and residential clients. Our expert installation ensures your signage is securely placed and seamlessly integrated into your space.",
    sections: [
      {
        title: "Bespoke Signage Design",
        description: "We specialize in the design and fabrication of custom signage tailored to your brand or project needs. Whether for corporate, residential, or commercial spaces, our team creates visually impactful signs that not only reflect your identity but also serve as functional and engaging elements within the environment.",
        image: SERVICES.IndustrialCleaningBg,
      },
      {
        title: "Expert Signage Installation",
        description: "Our services extend beyond design, offering professional installation of all types of signage. From indoor to outdoor installations, our skilled team ensures that your signage is securely placed and visually striking, making it an integral part of your space's overall design.",
        image: SERVICES.IndustrialCleaningBg,
      },
    ],
  },
  {
    name: "ProjectManagement",
    image: SERVICES.projectManagementBg,
    title: "Project Management",
    description: "Our design team oversees every phase of the project, from the initial concept through to installation and final completion. We actively participate in regular site meetings, ensuring that our designs are being implemented precisely according to the specifications.",
    sections: [
      {
        title: "On-Time, On-Budget Execution",
        description: "We are committed to delivering projects within the agreed-upon timelines and budgets. Our dedicated project management team closely monitors progress, addresses any challenges promptly, and coordinates all aspects of the project to ensure efficient execution. By maintaining open communication with all involved parties, we ensure that the project proceeds smoothly, on time, and within financial constraints.",
        image: SERVICES.IndustrialCleaningBg,
      },
      {
        title: "Turn-Key Solutions",
        description: "In line with our comprehensive service approach, we offer turn-key solutions that cover all aspects of the project. From design and procurement to installation and final handover, our team manages every detail, ensuring a seamless and hassle-free experience for our clients. With our turn-key solutions, clients can rely on us for a complete, fully realized interior project, executed with precision and care.",
        image: SERVICES.IndustrialCleaningBg,
      },
    ],
  },
];


  