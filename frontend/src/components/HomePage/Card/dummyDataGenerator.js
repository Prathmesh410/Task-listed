import { faker } from '@faker-js/faker';
const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
const currentDate = new Date();
export function generateDummyData  () {
    const pieData = [];
    for(let i = 0;i <3;i++){
        let month = currentDate.getMonth()-i;
        let year = currentDate.getFullYear();
    
        if (month < 1) {
          month += 12;
          year -= 1;
        }
        
        let date = {month:months[month] , year : year};
        const topProducts = [];
        for (let j = 0; j < 3; j++) {

            const name = faker.commerce.productName();
            const value = faker.number.int({ min: 0, max: 100 });
            topProducts.push({ value:value ,name: name });
          }
          pieData.push({ month: date, topProducts });
    }
return pieData;
}

