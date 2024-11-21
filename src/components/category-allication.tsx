import { Pie } from "react-chartjs-2";
import { ITransaction } from "../interfaces/transaction.interface";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Card, CardContent, Typography } from "@mui/material";

interface CategoryAllocationChartProps {
    transactions: ITransaction[];
}

ChartJS.register(ArcElement, Tooltip, Legend);

export const CategoryAllocationChart = ({ transactions }: CategoryAllocationChartProps) => {

    const aggregatedData = transactions.reduce((acc, transaction) => {
        const { name } = transaction.category; // Використовуємо назву категорії
        const { ammount } = transaction;

        if (!acc[name]) {
            acc[name] = 0;
        }
        acc[name] += ammount;
        return acc;
    }, {} as Record<string, number>);

    // Формування даних для графіка
    const chartData = {
        labels: Object.keys(aggregatedData), // Назви категорій
        datasets: [
            {
                data: Object.values(aggregatedData), // Суми транзакцій для кожної категорії
                backgroundColor: Object.keys(aggregatedData).map((_, index) =>
                    `hsl(${(index * 360) / Object.keys(aggregatedData).length}, 70%, 60%)` // Динамічні кольори
                ),
                borderColor: "black",
                borderWidth: 1,
            },
        ],
    };
    
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "right" as const,
                labels: {
                    color: "blue",
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: any) => {
                        const value = tooltipItem.raw;
                        return `${Number(value).toLocaleString("ru-RU", {
                            minimumFractionDigits: 2,
                        })} UAH`;
                    },
                },
            },
        },
    };
    return (
        <Card
            sx={{
                backgroundColor: "white",
                borderRadius: "4px",
                boxShadow: 4,
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                padding: "1rem",
            }}>
            <CardContent>
                <Typography variant="h6" color="black">
                    Category Allocation
                </Typography>
            </CardContent>
            <Pie data={chartData} options={chartOptions} />
        </Card>
    )
}