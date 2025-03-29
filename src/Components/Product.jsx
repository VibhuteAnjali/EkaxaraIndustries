
import React, { useState } from 'react';
import Card from './ProductCard';
import "../style/Product.css";
import fibreGlass from "../img/fiberglass-epoxy-sheets.jpeg";
import fibreGlass2 from "../img/FR-4.webp";
import g10 from "../img/G10.png";
import g11 from "../img/G11.png";
import yellowEpoxy from "../img/yellowepoxy.jpg";
import GP03 from "../img/GPO3.jpg";
import FB from "../img/FiberglassSheetFRPSheet.png";
import Phenolic from "../img/Phenolic.png";
import Hylam from "../img/hylam.png";
import Pressboard from "../img/pressboard.png";
import PaperPressboard from "../img/Paperpaper.png";
import Derlin from "../img/derlin.png";
import HDPE from "../img/HDPE.png";
import Cober from "../img/COBER.png";
import woodSheet from "../img/wood sheet.png";
import glassEpoxy from "../img/GlassEpoxy.png";
import industrialFiberGlass from "../img/industrialFiberGlass.png";
import TeflonSheet from "../img/TeflonSheet.png";
import UHMWPE from "../img/UHMWPE.png";
import SMCsheet from "../img/SMCsheet.png";
import Jagerry from "../img/Jagerry.jpg";

const products = [
    { name: "Fiberglass Epoxy Sheet", material: "Fiber glass", size: "1220mm x 2440mm, 1mtr x 2 mtr, 1 mtr x 3 mtr", img: fibreGlass },
    { name: "FR4 G10 Sheets Fiberglass Epoxy Sheet", material: "Epoxy", size: "4x4 ft, 4x8 ft, 4x3 ft, 1x3 mtr", img: fibreGlass2 },
    { name: "G-10 Green Glass Epoxy Sheet", material: "Epoxy", size: "4x4ft, 4X8ft, 1x2 mtr, 1x3 mtr", img: g10 },
    { name: "FR4 Yellow Glass Epoxy Sheet", material: "Epoxy", size: "0.5 mm to 160 mm", img: yellowEpoxy },
    { name: "G-11 Class Glass Epoxy Green Sheet", material: "Epoxy", size: "4x4 ft, 4X8 ft, 1x2 mtr, 1x3 mtr", img: g11 },
    { name: "GPO3 Fiberglass polyester Sheet", material: "Polyester", size: "8x4 ft", img: GP03 },
    { name: "Fiberglass Sheet FRP Sheet", material: "Epoxy", size: "0.5 mm to 160 mm", img: FB },
    { name: "Cotton Phenolic Fabric Hylam Sheet & Cotton Phenolic Tubes", material: "Cotton Cloth Laminate Sheet", img: Phenolic },
    { name: "Commercial Hylam Sheet", material: "Polyester", size: "4x4 ft 8x4 ft", img: Hylam },
    { name: "2.6 Grade Commercial Pressboard", material: "Paper", size: "1150 x 2200 mm", img: Pressboard },
    { name: "3.1 Grade Pre Compressed PCB Insulation Press Board", material: "Paper", size: "1150 x 2200 mm", img: PaperPressboard },
    { name: "Delrin", material: "Thermo plastic polymer", size: "1 mtr X2 mtr, 1 mtr X1 mtr X 1.2 mtr X 3 mtr", img: Derlin },
    { name: "PP and HDPE sheet", material: "HDPE", size: "1000mm x 2000mm, 1250mm x 2000mm, 1220mm x 2440mm, 1000mm x 8000", img: HDPE },
    { name: "Comber Board – Jacquard", material: "Rapier Loom - Textile Industries", size: "1 mtr x 1 mtr, 160 mm x 1 mtr, 160 x 500 mm", img: Cober },
    { name: "Perma Wood/ Densified Laminated Wood Sheets & Its Component", material: "Wood", size: "1220x1220 mm, 1220x2440 mm, 750x3000mm, 2000x2000mm", img: woodSheet },
    { name: "Glass Epoxy Rod", material: "Glass Epoxy", size: "1/2 inch", img: glassEpoxy },
    { name: "Industrial Fiberglass Epoxy Tube", material: "Epoxy", size: "2Inch", img: industrialFiberGlass },
    { name: "White Teflon Sheet", material: "Teflon", size: "1000x1000 mm", img: TeflonSheet },
    { name: "UHMWPE Sheet", size: "1x2 mtr, 1x3 mtr", img: UHMWPE },
    { name: "SMC Sheet & Chequered Plate", material: "Polyester", size: "1 mm to 25 mm", img: SMCsheet }
];

const FoodProducts=[
    { name: "Jaggery", img: Jagerry}
];
export default function Product() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <div className='headline' id='Products'>Our Products</div>
            <div className='Subheadline'>1. Industry Supply</div>
            <div className='rowFlex'>
                {products.slice(0, 3).map((product, index) => (
                    <Card key={index} {...product} />
                ))}
            </div>

            {show && (
                <div className='visible'>
                    <div className='rowFlex' >
                        {products.slice(3, 6).map((product, index) => (
                            <Card {...product} key={index} />
                        ))}
                    </div>
                    <div className='rowFlex' >
                        {products.slice(6, 9).map((product, index) => (
                            <Card {...product} key={index} />
                        ))}
                    </div>
                    <div className='rowFlex' >
                        {products.slice(9, 12).map((product, index) => (
                            <Card {...product} key={index} />
                        ))}
                    </div>
                    <div className='rowFlex' >
                        {products.slice(12, 15).map((product, index) => (
                            <Card {...product} key={index} />
                        ))}
                    </div>
                    <div className='rowFlex' >
                        {products.slice(15, 18).map((product, index) => (
                            <Card {...product} key={index} />
                        ))}
                    </div>
                    <div className='rowFlex' >
                        {products.slice(18, 20).map((product, index) => (
                            <Card {...product} key={index} />
                        ))}
                    </div>
                </div>
            )}

            <div className='center'>
                <button className='showMore' onClick={() => setShow((prev) => !prev)}>
                    {show ? "Show Less" : "Show More"}
                    <img src='https://img.icons8.com/?size=20&id=40021&format=png&color=FFFFFF' alt="toggle button" />
                </button>
            </div>
          <div>
            <div className='Subheadline'>2. Food Supply</div>
               <div className='rowFlex' >
                            <Card {...FoodProducts} key={0} />
                    </div>
          </div>
        </div>
    );
}
