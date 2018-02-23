import moment from "moment"

const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {

    return expenses.filter((expense)=> 
    {  
       const createdAtMoment = moment(expense.createdAt)
        // const startDateMatch = typeof startDate !== 'number' || startDate<=expense.createdAt
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') :true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day') :true;

        //const endDateMatch = typeof endDate !== 'number' || endDate>=expense.createdAt
        const textMacth = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMacth;
    
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt?1:-1;
        }

        else if(sortBy === 'amount'){
            return a.amount < b.amount?1:-1;
        }

    })



}
export default getVisibleExpenses;