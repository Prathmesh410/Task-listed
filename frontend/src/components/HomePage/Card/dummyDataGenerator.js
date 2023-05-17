import { faker } from '@faker-js/faker';
const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
const currentDate = new Date();
export function generatePieDummyData  () {
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

export function generateActivityDummyData (){
    const activityData = [];
    for(let i = 0;i <3;i++){
        let month = currentDate.getMonth()-i;
        let year = currentDate.getFullYear();
    
        if (month < 1) {
          month += 12;
          year -= 1;
        }
        
        let date = {month:months[month] , year : year};
        const weekData = [];
        for (let j = 1; j <= 4; j++) {

            const week = `week ${j}`
            const value = faker.number.int({ min: 100, max: 500 });
            weekData.push({ week:week , value:value });
          }
          activityData.push({ month: date, weekData });
        }    
        return activityData;
}


