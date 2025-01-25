import { SERVICES } from "../assets";
import { ROUTES } from "./routes/desc";

export const ServiceDetails = {
    IndustrialCleaning: {
        image: SERVICES.IndustrialCleaningBg,
        title: "Industrial cleaning",
        description: "Deligent and thorough cleaning on all furniture, curtains including offices and residentail spaces ",
        get url() {
            return ROUTES.INDUSTRIAL_CLEANING.PATH;
        },
    },
    MaintenanceTreatment: {
        image: SERVICES.IndustrialTreatmentBg,
        title: "Routine Maintenance & Treatment",
        description: "Offering routine and schedules timely maintenance and treatment of furniture wares, including environmental fumigation.",
        get url() {
            return ROUTES.MAINTENANCE_TREATMENT.PATH;
        },
    },
    InteriorDesignConsultation: {
        image: SERVICES.consultationBg,
        title: "Interior Design Consultation",
        description: "Personalized consultations to understand client preferences and project requirements.",
        get url() {
            return ROUTES.DESIGN_CONSULTATION.PATH;
        },
    },
    SpacePlanning: {
        image: SERVICES.IndustrialCleaningBg,
        title: "Space Planning",
        description: "Optimizing layouts for functionality and aesthetics.",
        get url() {
            return ROUTES.SPACE_PLANNING.PATH;
        },
    },
    HomeOfficeFurniture: {
        image: SERVICES.officeBg,
        title: "Home and Office Furniture",
        description: "Sourcing and installing quality furniture pieces that complement the design vision.",
        get url() {
            return ROUTES.HOME_OFFICE_FURNITURE.PATH;
        },
    },
    CurtainsWindowBlinds: {
        image: SERVICES.curtainsBlindsBg,
        title: "Curtains & Window blinds",
        description: "Design and installation of curtains and window blinds tailored to client specifications.",
        get url() {
            return ROUTES.CURTAINS_AND_BLINDS.PATH;
        },
    },
    WallpaperPainting: {
        image: SERVICES.IndustrialCleaningBg,
        title: "3D WallPaper and Painting",
        description: "Application of wallpapers, specialized paints, and ceiling designs to enhance interior spaces.",
        get url() {
            return ROUTES.WALLPAPER_PAINTING.PATH;
        },
    },
    Signage: {
        image: SERVICES.IndustrialCleaningBg,
        title: "Custom Signage",
        description: "Design and fabrication of bespoke signage for corporate and residential clients.",
        get url() {
            return ROUTES.SIGNAGE.PATH;
        },
    },
    FlooringSolutions: {
        image: SERVICES.IndustrialCleaningBg,
        title: "Flooring Solutions",
        description: "Installation of tiles, parquet, and interlocking systems to suit various design styles.",
        get url() {
            return ROUTES.FLOORING_SOLUTIONS.PATH;
        },
    },
    Pop: {
        image: SERVICES.IndustrialCleaningBg,
        title: "Plaster of Paris (POP)",
        description: "Creating decorative elements for ceilings and walls.",
        get url() {
            return ROUTES.POP.PATH;
        },
    },
    ProjectManagement: {
        image: SERVICES.projectManagementBg,
        title: "Project Management",
        description: "Overseeing interior projects from conception to completion, ensuring timely delivery and quality workmanship.",
        get url() {
            return ROUTES.PROJECT_MANAGEMENT.PATH;
        },
    },
    ProfessionalAdvice: {
        image: SERVICES.professionalAdviceBg,
        title: "Professional Advisory Services",
        description: "Offering expert advice on design trends, materials, and cost estimation to guide clients in making informed decisions.",
        get url() {
            return ROUTES.PROFESSIONAL_ADVICE.PATH;
        },
    },
}