import moment from "moment"

const expenses = [{
    id:'1',
    description:"rent",
    amount:132,
    createdAt:0,
    note:""
},
{
    id:'2',
    description:"foo",
    amount:12,
    createdAt:moment(0).subtract(4,'days').valueOf(),
    note:"sadasdasasd"
},
{
    id:'3',
    description:"water",
    createdAt:moment(0).add(5,'days').valueOf(),
    amount:345,
    note:"sadasdasasd"
}
]

export default expenses
