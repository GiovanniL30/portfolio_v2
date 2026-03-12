import reactIcon from "../assets/icons/react.png";
import jsonIcon from "../assets/icons/json.png";
import mdIcon from "../assets/icons/letter-i.png";
import folderIcon from "../assets/icons/folder.png";

export const getFileIcon = (name: string) => {
  const ext = name.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "tsx":
    case "jsx":
      return reactIcon;
    case "json":
      return jsonIcon;
    case "md":
      return mdIcon;
    case "folder":
      return folderIcon;
  }
};
