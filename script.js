const OPERATIONS = ["+","-","/","*","%"];

class SuperMath{

    check(obj){
        let isCalculate = confirm(`Do you want to calculate ${obj.X} ${obj.znak} ${obj.Y}`);
        isCalculate ? this.calculate(obj) : this.input();
    }

    calculate(obj){
        // let res = eval(`${obj.X}${obj.znak}${obj.Y}`);
        // alert(`${obj.X} ${obj.znak} ${obj.Y} = ${res}`);

        let res = 0;
        switch (obj.znak){
            case "+": res=obj.X+obj.Y; break;
            case "-": res=obj.X-obj.Y; break;
            case "*": res=obj.X*obj.Y; break;
            case "/": res=obj.X/obj.Y; break;
            case "%": res=obj.X%obj.Y; break;
        }

        alert(`${obj.X} ${obj.znak} ${obj.Y} = ${res}`);
    }

    input(){
        obj.X = parseFloat(prompt('Enter the first number:', 1));
        obj.Y = parseFloat(prompt('Enter the second number:', 1));
        obj.znak = prompt('Write the desired operation below (+, -, *, /, %):', "+");
        
        if(OPERATIONS.includes(obj.znak)){
            this.check(obj)
            return;
        }
        alert('Error. Cannot be calculated.');
        this.input();
    }
}

obj = {X:12, Y:3, znak: '/'}
p = new SuperMath();
p.check(obj);