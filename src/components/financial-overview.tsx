import { useMemo } from "react";
import { ITransaction } from "../interfaces/transaction.interface";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import "../config/config";

interface FinancialOverviewChartProps {
    transactions: ITransaction[];
}
 
const FinancialOverviewChart = ({ transactions } :FinancialOverviewChartProps ) => {
    const { labels, incomeData, expenseData } = useMemo(() => {
        console.log(transactions);
        const incomeMap = new Map<string, number>();
        const expenseMap = new Map<string, number>();

        transactions.forEach((t) => {
            const month = new Date(t.createdAt).toLocaleString("en-US", { month: "short" });
            if (t.type === "Income") {
                incomeMap.set(month, (incomeMap.get(month) || 0) + +t.ammount);
            } else if (t.type === "Expense") {
                expenseMap.set(month, (expenseMap.get(month) || 0) + +t.ammount);
            }
        });

        const labels = Array.from(new Set([...incomeMap.keys(), ...expenseMap.keys()])).sort();
        const incomeData = labels.map((label) => incomeMap.get(label) || 0);
        const expenseData = labels.map((label) => expenseMap.get(label) || 0);

        return { labels, incomeData, expenseData };
    }, [transactions]);

    const chartData = useMemo(
        () => ({
            labels,
            datasets: [
                {
                    label: "Income",
                    data: incomeData,
                    borderColor: "green",
                    backgroundColor: "green",
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,  // Додаємо точки на лінії
                    pointBackgroundColor: "green",  // Колір точок
                },
                {
                    label: "Expenses",
                    data: expenseData,
                    borderColor: "red",
                    backgroundColor: "red",
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,  // Додаємо точки на лінії
                    pointBackgroundColor: "red",  // Колір точок
                },
            ],
        }),
        [labels, incomeData, expenseData]
    );

    return (
        <Card sx={{ margin: 2, padding: 2 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Financial Overview
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    Monthly income and expenses overview
                </Typography>
                {transactions.length > 0 ? (
                    <Box sx={{ padding: 2 }}>
                        <Line
                            data={chartData}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        display: true,
                                        position: "top",
                                    },
                                },
                            }}
                        />
                    </Box>
                ) : (
                    <Typography variant="body2" color="textSecondary">
                        No data available to display.
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default FinancialOverviewChart;