import BookingToolSvg from "@/components/AppDnaStacks/BookingToolSvg";
import CarSharingSvg from "@/components/AppDnaStacks/CarsharingSvg";
import SocialPlatformSvg from "@/components/AppDnaStacks/SocialPlatformSvg";
import CrmToolSvg from "@/components/AppDnaStacks/CrmToolSvg";
import PeopleOsSvg from "@/components/AppDnaStacks/PeopleOsSvg";
import TelehealthSvg from "@/components/AppDnaStacks/TelehealthSvg";
import FoodDeliverySvg from "@/components/AppDnaStacks/FoodDeliverySvg";
import { BlockColor } from "./AppDnaStacks";

type DnaLabelIndex = number;
export type DnaLabel = {
  position: "bottom" | "top";
  color: BlockColor;
  label: string;
};

export const dnaLabels: Record<DnaLabelIndex, DnaLabel> = {
  0: {
    label: "User Interface",
    position: "top",
    color: "orange",
  },
  2: {
    label: "Infrastructure",
    position: "bottom",
    color: "green",
  },
  4: {
    label: "Basic Features",
    position: "top",
    color: "blue",
  },
  5: {
    label: "3rd party stuff",
    position: "bottom",
    color: "violet",
  },
};

type AppStackDisplayProperties = {
  stackLabel: string;
  SvgComponent: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  offset?: number;
};

export const appStacks: AppStackDisplayProperties[] = [
  {
    stackLabel: "CRM Tool",
    SvgComponent: CrmToolSvg,
    offset: 4,
  },
  {
    stackLabel: "People OS",
    SvgComponent: PeopleOsSvg,
  },
  {
    stackLabel: "Booking Tool",
    SvgComponent: BookingToolSvg,
    offset: 11,
  },
  {
    stackLabel: "Telehealth",
    SvgComponent: TelehealthSvg,
    offset: 5,
  },
  {
    stackLabel: "Food Delivery",
    SvgComponent: FoodDeliverySvg,
  },
  {
    stackLabel: "Social Platform",
    SvgComponent: SocialPlatformSvg,
    offset: 12,
  },
  {
    stackLabel: "Carsharing",
    SvgComponent: CarSharingSvg,
  },
];
