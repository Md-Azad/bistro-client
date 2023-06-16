import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import orderCoverImg from "../../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
    const [menu] = useMenu();

    const [tabIndex,setTabIndex] = useState(0);

    const drinks = menu.filter(item=> item.category ==='drinks');
    const dessert = menu.filter(item=> item.category ==='dessert');
    const soup = menu.filter(item=> item.category ==='soup');
    const salad = menu.filter(item=> item.category ==='salad');
    const pizza = menu.filter(item=> item.category === 'pizza');

  return (
    <div>
      <Helmet>
        <title>Bistro | Order</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
          
        </TabList>
        <TabPanel>
           <OrderTab item={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={drinks}></OrderTab>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default Order;
