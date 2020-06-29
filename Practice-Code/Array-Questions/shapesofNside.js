// Shapes With N Sides

// nSidedShape(3) ➞ "triangle"

// nSidedShape(1) ➞ "circle"

// nSidedShape(9) ➞ "nonagon"

function nSidedShape(num){
    switch(num){
        case 1:
            return "circle"
            break;
        case 2:
            return "semi-circle"
            break;
            case 2:
            return "semi-circle"
            break;
            case 3:
            return "triangle"
            break;
            case 4:
            return "square"
            break;
            case 5:
            return "pentagon"
            break;
            default:
                return "idk"

            }
        }

        console.log(nSidedShape(10))