import { TabItem } from "../types";
import { CircleIcon } from "../../public/icons/Circle";
import { TimeIcon } from "../../public/icons/Time";
import { BatchIcon } from "../../public/icons/Batch";
import { ExportIcon } from "../../public/icons/Export";
import { AdvancedIcon } from "../../public/icons/Advanced";
const iconClass = (isActive: boolean) =>
  isActive ? "text-blue-600" : "text-gray-400";
export const tabs: TabItem[] = [
  {
    id: "document",
    label: "Document Scanner",
    category: "DOCUMENT SCANNER",
    title: "Scan with Ease",
    description:
      "Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.",
    image: "/images/slide1.png",
    icon: (isActive: boolean) => <CircleIcon className={iconClass(isActive)} />,
  },
  {
    id: "sign",
    label: "Sign & Stamp",
    category: "SIGN & STAMP",
    title: "One-Tap Focus",
    description:
      "Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!",
    image: "/images/slide2.png",
    icon: (isActive: boolean) => <TimeIcon className={iconClass(isActive)} />,
  },
  {
    id: "batch",
    label: "Batch Scanning",
    category: "BATCH SCANNING",
    title: "Multiple Page Scan",
    icon: (isActive: boolean) => <BatchIcon className={iconClass(isActive)} />,
    description:
      "Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.",
    image: "/images/slide3.png",
  },
  {
    id: "filters",
    label: "Advanced Filters",
    category: "ADVANCED FILTERS",
    title: "Unique Filters",
    icon: (isActive: boolean) => (
      <AdvancedIcon className={iconClass(isActive)} />
    ),
    description:
      "Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.",
    image: "/images/slide4.png",
  },
  {
    id: "export",
    label: "Export & Share",

    icon: (isActive: boolean) => <ExportIcon className={iconClass(isActive)} />,
    category: "EXPORT & SHARE",
    title: "All-Round Conversion",
    description: "Export your scans as PDF,JPG,ZIP,TXT and Word.",
    image: "/images/slide5.png",
  },
];
