// import { cn } from "../../utils/cn";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function CollegeGrid() {
  return (
    <BentoGrid className="mx-auto max-w-4xl">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const IITRoorkie = () => (
  <img
    src="https://res.cloudinary.com/dl0d1pfrs/image/upload/v1709823707/mask/iit_roorkie.jpg"
    alt="IIT Roorkie"
    className="h-full w-full rounded-xl object-cover"
  />
);

const IITKgp = () => (
  <img
    src="https://res.cloudinary.com/dl0d1pfrs/image/upload/v1709823447/mask/iitKgp.jpg"
    alt="IIT Kharagpur"
    className="h-full w-full rounded-xl object-cover"
  />
);

const CGU = () => (
  <img
    src="https://res.cloudinary.com/dl0d1pfrs/image/upload/v1709823592/mask/cgu_odisha-2.jpg"
    alt="CV Raman Global University, Odisha"
    className="h-full w-full rounded-xl object-cover"
  />
);

const BHU = () => (
  <img
    src="https://res.cloudinary.com/dl0d1pfrs/image/upload/v1709823687/mask/bhu.jpg"
    alt="Banares Hindu University"
    className="h-full w-full rounded-xl object-cover"
  />
);

const KIIT = () => (
  <img
    src="https://res.cloudinary.com/dl0d1pfrs/image/upload/v1709823621/mask/kiit.jpg"
    alt="KIIT University, Bhubaneswar"
    className="h-full w-full rounded-xl object-cover"
  />
);

const items = [
  {
    header: <CGU />,
  },
  {
    header: <IITKgp />,
  },
  {
    header: <BHU />,
  },
  {
    header: <IITRoorkie />,
  },
  {
    header: <KIIT />,
  },
];
