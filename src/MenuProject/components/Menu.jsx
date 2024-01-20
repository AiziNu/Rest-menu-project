import React from "react";
import {
  CardImg,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

export default function Menu({ filteredItems, addToCart }) {
  return (
    <div className="menu-wrapper">
      {filteredItems.map((item) => {
        const { id, price, title, img, desc } = item;
        return (
          <div className="menu-item-card">
            <Card className="my-2">
              <CardImg
                alt="title"
                src={img}
                style={{
                  height: 500,
                }}
                top
                width="80%"
              />
              <CardBody>
                <CardTitle tag="h5" className="title">
                  {title} Price: ${price}
                </CardTitle>
                <CardText>{desc}</CardText>
              </CardBody>
              <Button color="warning" outline onClick={() => addToCart(id)}>
                Order
              </Button>{" "}
            </Card>
          </div>
        );
      })}
    </div>
  );
}
