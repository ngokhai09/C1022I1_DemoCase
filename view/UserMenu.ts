const readlineSync = require('readline-sync');

export class UserMenu{
    private menu = `Đây là User. 1.Exit`;
    selection(){
        while(true){
            let choice;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Choice: ");
                if (choice < 1 || choice > 3) {
                    console.log("Wrong choice. Try again");
                }
            } while (choice < 1 || choice > 3);
            switch (choice){
                case 1:
                    return;
            }
        }

    }
}