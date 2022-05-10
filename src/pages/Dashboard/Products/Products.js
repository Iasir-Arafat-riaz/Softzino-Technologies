import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import Loader from "../../Shared/Loader/Loader";
import Product from "./Product/Product";

/*const products=[{id:1,model:"ASRock H370M-HDV", company:"intel", price:20000, detail1:"Processor Clock Speed: 3.00 GHz up to 4.40 GHz",detail2:"Cores-6, Threads-6 & 9MB Smart Cache",detail3:"2 DIMMs, Up to DDR4 2666 MHz" ,detail4:"1 x PCIe 3.0 x16, 1 x PCIe 3.0 x1", image:"https://i.ibb.co/LYpg8z1/h370m-hdv-core-i5-9400-500x500.jpg"},
{id:2,model:"ASRock H370M-HDV Intel", company:"intel", price:23000, detail1:"Processor Clock Speed: 2.90 GHz up to 4.10 GHz",detail2:"Cores: 6, Threads: 6 & 9MB Smart Cache",detail3:"2 DIMMs, Up to DDR4 2666 MHz" ,detail4:"1 x PCIe 3.0 x16, 1 x PCIe 3.0 x1", image:"https://i.ibb.co/SBbkj3z/asrock-h370m-hdv-core-i5-9500-500x500.jpg"},
{id:3,model:"ASRock A520M-HDV", company:"Ryzen", price:25000, detail1:"Supported Processor: AMD Ryzen 5000/ 5000 G/ 4000 G/ 3000/ 3000 G/ 2000/ 2000 G Series Processors",detail2:"Supported Socket: AMD Socket AM4",detail3:"Supported Memory: 4 x DDR4 DIMM sockets" ,detail4:"Form Factor: ATX (30.5cm x 24.4cm)", image:"https://i.ibb.co/gSRmQyD/a520m-hdv-ryzen-5-5600g-bundle-500x500.jpg"},
{id:4,model:"Gigabyte X570S ", company:"Gigabyte", price:21000, detail1:"Processor Clock Speed: 3.00 GHz up to 4.40 GHz",detail2:"Cores-6, Threads-6 & 9MB Smart Cache",detail3:"2 DIMMs, Up to DDR4 2666 MHz" ,detail4:"1 x PCIe 3.0 x16, 1 x PCIe 3.0 x1", image:"https://i.ibb.co/RQXsnyj/x570s-ud-01-500x500.jpg"},
{id:5,model:"MSI B450M MORTAR", company:"MSI", price:23000, detail1:"Motherboard supports DDR4 Memory, up to 4133(OC) MHz",detail2:"Graphics Output Options: 1x HDMI, 1x Display Port",detail3:"Processor speed: 3.7GHz up to 4.2GHz" ,detail4:"Cache: L2: 3MB, L3: 8MB", image:"https://i.ibb.co/ZNd4BPF/b450m-mortar-max-and-ryzen-5-pro-4650g-01-500x500.jpg"},
{id:6,model:"Gigabyte GA-H61M-DS2", company:"Gigabyte", price:7100, detail1:"Intel® H61 Express Chipset",detail2:"Supports 3rd Gen. Intel 22nm CPUs and 2nd Gen CPUs",detail3:"2 x 1.5V DDR3 DIMM" ,detail4:"1 x PCI Express x16 slot", image:"https://i.ibb.co/PgpMhhJ/GA-H61-M-DS2-500x500.jpg"},
{id:7,model:"ASRock B550M", company:"Ryzen", price:11800, detail1:"Supports 3rd Gen AMD AM4 Ryzen/ Future AMD Ryzen Processors",detail2:"Supports DDR4 4733+ (OC)",detail3:"6 SATA3, 1 Hyper M.2, 1 M.2" ,detail4:"8 Power Phase Design", image:"https://i.ibb.co/PTPvSz2/b550m-pro4-1-500x500.jpg"},
{id:8,model:"Asus TUF X299 MARK 2", company:"Asus", price:26000, detail1:"Chipset- Intel X299",detail2:"Supported CPU- Intel X-Series Processors",detail3:"Intel Socket 2066" ,detail4:"8 x DIMM, Max. 128GB, DDR4 Memory", image:"https://i.ibb.co/VgJr7yH/x299-mark-2-500x500.jpg"},
{id:9,model:"Gigabyte X299 AORUS", company:"Gigabyte", price:28000, detail1:"Intel® X299 Express Chipset",detail2:"Supports Intel® Core™ X-series Processor Family",detail3:"8 x DDR4 DIMM" ,detail4:"2 x PCI Express x16 slots", image:"https://i.ibb.co/bF8V8hw/x299-g3-1-500x500.png"},
{id:10,model:"Gigabyte AMD B450", company:"Gigabyte", price:9600, detail1:"Supports Up to AMD Ryzen 5000 series Processors",detail2:"Chipset: AMD B450",detail3:"4 x DDR4 DIMM, Max 64 GB" ,detail4:"Dual channel memory architecture", image:"https://i.ibb.co/87Yy7Vs/b450-gaming-x-500x500.jpg"},
{id:11,model:"Gigabyte B550 ", company:"Gigabyte", price:15000, detail1:"Ryzen 5000 Series/ 3rd Gen & 3rd Gen with Radeon Graphics Processors",detail2:"10+3 Phases Pure Digital VRM",detail3:"Ultra-Fast NVMe PCIe Slots" ,detail4:"HDMI, DVI-D Ports", image:"https://i.ibb.co/LSbvcKv/b550-gaming-x-500x500.jpg"},
{id:12,model:"Gigabyte B450M S2H ", company:"Gigabyte", price:6000, detail1:"Supports Up to AMD Ryzen 5000 series Processors",detail2:"Chipset: AMD B450",detail3:"Memory: 2 x DDR4, Max. 32 GB" ,detail4:"3 x PCI Express slots", image:"https://i.ibb.co/R2FFmfQ/b450m-s2h-ultra-1-500x500.jpg"}
]*/

const Products = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(true);
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoad(false);
      });
  }, []);
//   console.log(products);
if(load){
    return(<Loader/>)
}
  return (
    <div>
      <h1>Products</h1>
      <CardGroup className="row">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </CardGroup>
    </div>
  );
};

export default Products;
