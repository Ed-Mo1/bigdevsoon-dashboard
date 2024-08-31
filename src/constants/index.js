import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { TbMessage2 } from "react-icons/tb";
import { TbShoppingBag } from "react-icons/tb";
import { TbFileInvoice } from "react-icons/tb";
import { TfiStatsUp } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { LuHelpCircle } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import logo1 from "../assets/stripe.svg";
import logo2 from "../assets/zapier.svg";
import logo3 from "../assets/logos_shopify.svg";
export const sidebarItems = [
  [
    {
      id: 1,
      name: "Dashboard",
      isActive: true,
      Icon: MdOutlineSpaceDashboard,
    },
    {
      id: 2,
      name: "Payment",
      isActive: false,
      Icon: MdPayment,
    },
    {
      id: 3,
      name: "Customers",
      isActive: false,
      Icon: GoPeople,
    },
    {
      id: 4,
      name: "Messages",
      isActive: false,
      Icon: TbMessage2,
    },
  ],
  [
    {
      id: 5,
      name: "Product",
      isActive: false,
      Icon: TbShoppingBag,
    },
    {
      id: 6,
      name: "Invoice",
      isActive: false,
      Icon: TbFileInvoice,
    },
    {
      id: 7,
      name: "Analytics",
      isActive: false,
      Icon: GoPeople,
    },
    {
      id: 8,
      name: "Analytics",
      isActive: false,
      Icon: TfiStatsUp,
    },
  ],
  [
    {
      id: 9,
      name: "Settings",
      isActive: false,
      Icon: IoSettingsOutline,
    },
    {
      id: 10,
      name: "Security",
      isActive: false,
      Icon: MdOutlineSecurity,
    },
    {
      id: 11,
      name: "Help",
      isActive: false,
      Icon: LuHelpCircle,
    },
  ],
  [
    {
      id: 12,
      name: "Log Out",
      isActive: false,
      Icon: FiLogOut,
    },
  ],
];

export const dashCardItems = [
  {
    id: 1,
    name: "Total income",
    value: "$ 33,328.12",
    percentage: "12.24",
    status: "inc",
  },
  {
    id: 2,
    name: "Profit",
    value: "$ 8,583.09",
    percentage: "2.63",
    status: "dec",
  },
  {
    id: 3,
    name: "Total views",
    value: "52.234.32",
    percentage: "1.46",
    status: "inc",
  },
  {
    id: 4,
    name: "Conversion rate",
    value: "6,12",
    percentage: "8,75",
    status: "inc",
  },
];

export const salesData = {
  totalRevenue: "50,345.67",
  totalTarget: "703,21.45",
  salesOverview: [
    { month: "Apr 2023", revenue: 17500, target: 21000 },
    { month: "May 2023", revenue: 19500, target: 22000 },
    { month: "Jun 2023", revenue: 18500, target: 20000 },
    { month: "Jul 2023", revenue: 20000, target: 22000 },
    { month: "Aug 2023", revenue: 23000, target: 25000 },
    { month: "Sep 2023", revenue: 21000, target: 23000 },
    { month: "Oct 2023", revenue: 24500, target: 25000 },
    { month: "Nov 2023", revenue: 20500, target: 24000 },
    { month: "Dec 2023", revenue: 15780.21, target: 20000 },
    { month: "Jan 2024", revenue: 0, target: 17000 },
  ],
};

export const basicAnim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const tabelData = [
  {
    logo: logo1,
    type: "Finance",
    rate: 33,
    profit: "10,998.28",
  },
  {
    logo: logo2,

    type: "CRM",
    rate: 27,
    profit: "8,998.59",
  },
  {
    logo: logo3,

    type: "Marketplace",
    rate: 40,
    profit: "13,331.24",
  },
];

export const radarData = [
  { region: "Asia", value: 2201 },
  { region: "Europe", value: 2865 },
  { region: "Pacific", value: 2475 },
  { region: "Americans", value: 1762 },
  { region: "Middle East", value: 1749 },
  { region: "Africa", value: 1591 },
];
