
////////////// Door Images //////////////////


import mumbaiuniv from "../Images/logos/mumbai_univ-removebg-preview.png";
import rjc from "../Images/logos/rjclogo.png";

// --------------certificate fashion---------------
import embro from "../Images/course/Embroidery.jpg";
import style from "../Images/course/Fashion Styling.jpg";
import deg from "../Images/icons/graduation.png";
import cert from "../Images/icons/certificate.png";
import illust from "../Images/course/Fashion Illustration.jpg";
import tailor from "../Images/course/Tailoring.avif";
import fashion from "../Images/BSc Fashion designing .jpg";
// -----------------------certificate interior--------------
import light from "../Images/course/Light.jpg";
import furniture from "../Images/course/Furniture Design.jpg"
import sustain from "../Images/course/Sustainable Design.jpg"
import vastu from "../Images/course/Vastu.jpg"
import cad from "../Images/course/Computer Aided Design.jpg"
import spec from "../Images/course/Room Designing .jpg";
import interior from "../Images/BSc Interior Designing .jpg";

const GalleryData = [
  // {
  //   id: 1,
  //   Icon:mumbaiuniv,
  //   Category:"Fashion Certifiacte Course",
    
  // },
  {
    id: 11,
    Icon:mumbaiuniv,
    Category:"Degree Course",
    CategoryName:"B.Sc in Fashion Designing",
    Duration:"3 Year Full Time Course ",
    Earn:"Degree",
    Desc:"This undergraduate program is designed to provide students with comprehensive knowledge and practical skills in the field of fashion design.",
    CImage:fashion,
    Cap:deg,
    Timage:mumbaiuniv,
    Tname:"Sajid Momin",
    Desig:"Senior Faculty, Fashion Designing ",
  },
  {
    id: 12,
    Icon:mumbaiuniv,
    Category:"Degree Course",
    CategoryName:"B.Sc in Interior Designing",
    Earn:"Degree",
   Cap:deg,
    Duration:"3 Year Full Time Course ",
    Desc:"This program typically covers a variety of subjects related to interior design, providing you with both theoretical knowledge and practical skills. ",
   Tname:"Rajesh",
    CImage:interior,
  },
  
  {
    id: 1,
    Icon:rjc,
    Category:"Fashion Certificate Course",
    CategoryName:"Tailoring",
    Ctitle:"(Womens/Mens Wear)",
    Duration:"6 Months",
    Earn:"Short Term Certificate",
    Desc:"Art of creating clothes by sewing fabric together using stitches and patterns to make them fit and look just right. ",
    CImage:tailor,
    Timage:mumbaiuniv,
   Cap:cert,
    Tname:"Gayatri Barshi",
    Desig:"Senior Faculty, Fashion Designing ",
  },
  {
    id: 2,
    Icon:rjc,
    Category:"Fashion Certificate Course",
    CategoryName:" Fashion Illustration",
   
    Duration:"6 Months",
    Earn:"Short Term Certificate",
   Cap:cert,
    Desc:"Communicate your Fashion Ideas on papers or through Design based software Programs",
    CImage:illust,
    Timage:mumbaiuniv,
    Tname:"Gayatri Barshi",
    Desig:"Senior Faculty, Fashion Designing ",
  },
  {
    id: 3,
    Icon:rjc,
    Category:"Fashion Certificate Course",
    CategoryName:" Embroidery",
    Duration:" 6 Months",
    Earn:"Short Term Certificate",
   Cap:cert,
    Desc:"Painting with thread, creating beautiful designs and patterns by stitching onto fabric",
    CImage:embro,
    Timage:mumbaiuniv,
    Tname:"Mehwash Shaikh",
    Desig:"Senior Faculty, Fashion Designing ",
  },
  {
    id: 4,
    Icon:rjc,
    Category:"Fashion Certificate Course",
    CategoryName:" Fashion Styling",
    Duration:" 3 Months",
    Earn:"Short Term Certificate",
    Earn:"Earn a certificate",
   Cap:cert,
    Desc:" An art of putting together clothes and accessories to create stylish and cohesive looks.",
    CImage:style,

    Timage:mumbaiuniv,
    Tname:"Khushi Kothari",
    Desig:"Faculty, Fashion Designing ",
  },
  
  
  {
    id: 5,
    Icon:rjc,
    Category:"Interior Certificate Course",
    CategoryName:"Furniture Design and Layout ",
  
    Duration:"6 Months",
    Earn:"Short Term Certificate",
   Cap:cert,
    Desc:"These courses concentrate on furniture selection, arrangement, and creating functional yet aesthetically pleasing spaces",
    CImage:furniture,
  },
  {
    id: 6,
    Icon:rjc,
    Category:"Interior Certificate Course",
    CategoryName:"Computer-Aided Design ",
    Ctitle:"(CAD)",
    Duration:" 6 Months",
    Earn:"Short Term Certificate",
   Cap:cert,
    Desc:"Learning AutoCAD software that is beneficial for interior designers. This is a Short course focusing on these programs' basics or specific functionalities.",
   
    CImage:cad,
  },
  {
    id: 7,
    Icon:rjc,
    Category:"Interior Certificate Course",
    CategoryName:"Sustainable Interior Design",
    Duration:" 6 Months",
    Earn:"Short Term Certificate",
   Cap:cert,
    Desc:"Eco-friendly design practices and materials",
    CImage:sustain,
  },
  {
    id: 8,
    Icon:rjc,
    Category:"Interior Certificate Course",
    CategoryName:"Lighting Design",
    Duration:" 3 Months",
    Earn:"Short Term Certificate",
   Cap:cert,
    Desc:"Understanding lighting techniques, fixtures, and how lighting impacts the overall ambiance of a space",
  
    CImage:light,
  },
  {
    id: 9,
    Icon:rjc,
    Category:"Interior Certificate Course",
    CategoryName:"Interior Design Specialization",
    Duration:"6 Months ( Short Term Certificate)",
    Earn:"Short Term Certificate",
   Cap:cert,
    Desc:"Focus on specific spaces like kitchens, bathrooms, or living rooms, delving into the specialized considerations for each area",
  
    CImage:spec,
  },
  {
    id: 10,
    Icon:rjc,
    Category:"Interior Certificate Course",
    CategoryName:"Vastu",
    Duration:"6 Months ( Short Term Certificate)",
    Earn:"Short Term Certificate",
   Cap:cert,
    Desc:"Vastu Shastra is an ancient Indian science that harmonizes spaces with natural forces, aiming to enhance well-being and balance in life.",
  
    CImage:vastu,
  },
 
  
];

export default GalleryData;

