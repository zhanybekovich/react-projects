import { Drawer, List, ListItem } from "@mui/material";
import { scroller } from "react-scroll";

const SideDrawer = (props) => {
  const links = [
    {
      where: "featured",
      value: "To Top",
    },
    {
      where: "venuenfo",
      value: "Venue NFO",
    },
    {
      where: "highlight",
      value: "Highlights",
    },
    {
      where: "pricing",
      value: "Pricing",
    },
    {
      where: "location",
      value: "Location",
    },
  ];

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    props.onClose(false);
  };

  const renderItem = (item) => {
    return (
      <ListItem
        onClick={() => {
          scrollToElement(item.where);
        }}
        key={item.where}
        style={{
          cursor: "pointer",
        }}
      >
        {item.value}
      </ListItem>
    );
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={props.open}
        onClose={() => props.onClose(false)}
      >
        <List component="nav">{links.map((item) => renderItem(item))}</List>
      </Drawer>
    </>
  );
};

export default SideDrawer;
