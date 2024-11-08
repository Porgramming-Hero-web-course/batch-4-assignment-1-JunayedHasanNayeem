{
    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type Circle = {
        shape: "circle";
        radius: number;
    }
    
    type Shape = Circle | Rectangle;
    
    const calculateShapeArea = (shape: Shape): number|string => {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius;
        } else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        } else {
            return "I don't know the formula";
        }
    }
    

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea); 
    
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);

}