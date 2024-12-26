import { faCertificate, faUsers, faShippingFast, faHistory, faFlaskVial, faFlask, faFileContract, faEye, faPencil, faListAlt, faDollarSign, faCommentDots, faPrint, faTents } from '@fortawesome/free-solid-svg-icons';
const groups = [
  {
    side: "right",
    title: "Folder Details",
    items: [
      {
        label: "Folder Accreditations",
        value: "folder.accreditations",
        icon: faCertificate,
      },
      { label: "Folder Contacts", value: "folder.contacts", icon: faUsers },
      {
        label: "Return Options",
        value: "folder.returnoptions",
        icon: faShippingFast,
      },
      { label: "History", value: "folder.history", icon: faHistory },
    ],
  },
  {
    side: "left",
    title: "Add Inventory",
    items: [
      {
        label: "Patient",
        value: "patientDash",
        icon: faUsers,
      },
    ],
  },
  {
    side: "left",
    title: "Samples",
    items: [
      {
        label: "Manage Samples",
        value: "managesamples",
        icon: faCertificate,
      },
      { label: "History", value: "folder.history", icon: faHistory },
    ],
  },
  {
    side: "left",
    title: "Tests Assignment",
    items: [
      { label: "Analytes", value: "folder.analytes", icon: faFlask },
      { label: "add Analytes", value: "folder.analytes", icon: faFlaskVial },
      {
        label: "Specifications",
        value: "folder.specification",
        icon: faFileContract,
      },
    ],
  },
  {
    side: "left",
    title: "Prep Test Instructions",
    items: [
      {
        label: "View Instructions",
        value: "folder.viewInstructions",
        icon: faEye,
      },
      {
        label: "Edit Instructions",
        value: "folder.editInstructions",
        icon: faPencil,
      },
    ],
  },
  {
    side: "right",
    title: "Pricing",
    items: [
      {
        label: "Test Plan",
        value: "folder.testplanpricing",
        icon: faListAlt,
      },
      { label: "View Pricing", value: "viewPricing", icon: faDollarSign },
    ],
  },
  {
    side: "left",
    title: "Comments",
    items: [
      { label: "View/Edit", value: "comment", icon: faCommentDots },
    ],
  },
  {
    side: "right",
    title: "Printable",
    items: [
      { label: "Labels", value: "print-labels", icon: faPrint },
      { label: "Worksheets", value: "print-worksheets", icon: faPrint },
    ],
  },
  {
    side: "right",
    title: "Micro",
    items: [
      { label: "Microscopy", value: "Microscopy", icon: faTents },
    ],
  },
  {
    side: "Patients",
    title: "Parients",
    items: [
      { label: "Add Patient", value: "patientDash/add", icon: "" },
      { label: "View Patient", value: "viewPatient", icon: "" },
      { label: "Update Patient info", value: "patients/updatePatient", icon: "" },
    ],
  },
  {
    side: "Patients",
    title: "Tools",
    items: [
         { label: "Notification", value: "notification", icon: "" },
      { label: "Worksheets", value: "print-worksheets", icon: faPrint },

    ],
  },
  {
    side: "Patients",
    title: "Settings",
    items: [
         { label: "Notification", value: "notification", icon: "" },
      { label: "Worksheets", value: "print-worksheets", icon: faPrint },

    ],
  },
  {
    side: "Samples",
    items: [
      { label: "add samples", value: "samples/add", icon: "" },
      { label: "View samples", value: "viewSamples", icon: "" },
    ],
  },
];

export default groups;
