import photoshop from "../Images/icons/Adobe_Photoshop_CC_icon.svg.png";
import thinking from "../Images/icons/design-thinking.png";
import stiching from "../Images/icons/sewing.png";
import digital from "../Images/icons/tuxedo.png";
import embroidery from "../Images/icons/embroidery.png";
import illustration from "../Images/icons/Adobe_Illustrator_CC_icon.svg.png";
import merchendise from "../Images/icons/merchandise.png";
import drawing from "../Images/icons/color-palette.png";
import sustainbility from "../Images/icons/planet-earth.png";
import coreldraw from "../Images/icons/design-in-corel-draw.jpg";
import textile from "../Images/icons/fabric.png";
import fashion from "../Images/icons/dress.png";
import forecasting from "../Images/icons/man.png";
import draping from "../Images/icons/curtains.png";
import craft from "../Images/icons/yarn.png";
import accessries from "../Images/icons/jewelry.png";
import arriwork from "../Images/icons/sewing (1).png";
import portfolio from "../Images/icons/fashion-designer.png";
import ojt from "../Images/icons/presentation.png";

const CourseData = [
  {
    id: "01",
    title: "B.SC in Fashion Design",
    slug: "/fashion-design",
    description:
      "This one is the premier degree program of Fashion Designing. During the program, you will develop an in-depth understanding of the tools and techniques which are used in Fashion Designing. You will be interacting with our Subject Matter Experts, who have worked on projects that have been acclaimed both nationally and internationally.",
    level: "B.Sc",
    Duration: "36 months",
    Eligibility: "12th Grade",
    cources: [
      {
        title: "First Year",
        syllabus: [
          {
            title: "SEMESTER 1",
            topics: [
              "Introduction to Fashion Designing(Theory)",
              "Component of Fashion Designing",
              "Fashion Illustration",
              "Furnishing of Room",
              "Digital Marketing",
              "Surface Ornamentation",
              "Pattern Drafting",
              "Styling and Soft Skills",
              "Computer Fundamentals (Photoshop)",
              "History of Fashion",
              "Co-Curricular courses",
            ],
            icons: [
              photoshop,
              thinking,
              drawing,
              stiching,
              digital,
              embroidery,
            ],
          },
          {
            title: "SEMESTER 2",
            topics: [
              "Textile Science",
              "Textile Designing",
              "Fashion Illustration",
              "Sustainability in Fashion industry",
              "Design Technology",
              "Garment Construction",
              "Fashion Merchandising",
              "Portfolio (English)",
              "Digital & Technological Solutions (Photoshop)",
              "Fine Applied Visual Arts",
            ],
            icons: [
              illustration,
              sustainbility,
              stiching,
              merchendise,
              photoshop,
            ],
          },
        ],
      },
      {
        title: "Second Year",
        syllabus: [
          {
            title: "SEMESTER 3",
            topics: [
              "Surface Ornamentation - II",
              "Fashion Illustration - Croquis ( Kids & Female)  (Practical)",
              "Garment Construction II (Practical)",
              "Textiles Manufacturing and Applications ",
              "Textiles Manufacturing and Applications (Practical)",
              "Digital Photography ",
              "Fashion Illustration - Corel Draw (Practical)",
              "Modern Indian Languages - Hindi & Marathi",
              "Co-curricular activities",
              "Field Project - Fashion Designing ",
            ],
            icons: [coreldraw, illustration, stiching, textile, fashion],
          },
          {
            title: "SEMESTER 4",
            topics: [
              "Fashion Illustration - Croquis ( Mens & Bridal)",
              "Advance Corel Draw",
              "Advance Garment Construction",
              "Fashion Forecasting & Draping mannequins",
              "(Yet to Decide)",
              "Yarn Craft",
              "Modern Indian Languages 2",
              "Co-curricular activities",
              "Work with NGO",
            ],
            icons: [
              coreldraw,
              forecasting,
              illustration,
              draping,
              craft,
              fashion,
            ],
          },
        ],
      },
      {
        title: "Third Year",
        syllabus: [
          {
            title: "SEMESTER 5",
            topics: [
              "Advance Illustration I",
              "Merchandising",
              "<p>Choose from Elective Subjet List for SEM V<p><p>Example</p><ol><li>Construction of Ethenic Wear </li><li>Construction of Western Wear</li></ol>",
              "Furnishing of Room",
              "Accessories designing",
              "Advance Garment Construction",
            ],
            icons: [
              merchendise,
              illustration,
              stiching,
              accessries,
            ],
          },
          {
            title: "SEMESTER 6",
            topics: [
              "Advance  Illustration II",
              "Garment Construction Mens's wear and Kids Wear",
              "<ol><li>Aari Work </li><li>Creative Textile and Craft Heritage</li></ol>",
              "Advance Fashion Portfolio",
              "OJT",
            ],
            icons: [
              arriwork,
              textile,
              stiching,
              portfolio,
              ojt,
            ],
          },
        ],
      },
    ],
  },
];

export default CourseData;
