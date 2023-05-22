import mongoose from 'mongoose'

const ProductStatSchema = new mongoose.Schema({
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
        {
            month: String,
            totalSales: Number,
            totalUnits: Number,
        }
    ],
    dailyData: {
        date: String,
        totalSales: Number,
        totalUnits: Number
    }
}, { timeStamps: true})

const ProductStat = new mongoose.model('ProductStat', ProductStatSchema)
export default ProductStat