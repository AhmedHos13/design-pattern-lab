class pickedDate {
  shipmentDate(shipDate) {
    console.log(shipDate);
  }
}
class ShipmentAir extends pickedDate {
  overAir() {
    console.log("shipment over Air");
  }
}
class ShipmentGround extends pickedDate {
  overGround() {
    console.log("shipment over Ground");
  }
}
class ShipmentSea extends pickedDate {
  overSea() {
    console.log("shipment over sea");
  }
}

const SHIP_AIR = new ShipmentAir();
const SHIP_GROUND = new ShipmentGround();

SHIP_AIR.overAir();
SHIP_AIR.shipmentDate("19 - 6");
