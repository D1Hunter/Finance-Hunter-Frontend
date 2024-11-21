import { Box, Grid2 as Grid, Typography } from "@mui/material"
import PersonalFinancesCard from "../../components/personal-finance-card.component";
import { Balance, ShoppingCartCheckout, Work } from "@mui/icons-material";
import { transactionAPI } from "../../services/transaction.service";
import { useEffect, useState } from "react";
import FinancialOverview from "../../components/financial-overview";
import { CategoryAllocationChart } from "../../components/category-allication";

const Dashboard = () => {
  const { data: transactions = [], isSuccess } = transactionAPI.useGetTransactionsQuery(null);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [balance, setBalance] = useState(0);


  useEffect(() => {
    if (isSuccess) {
      const calculatedIncome = transactions
        .filter((t) => t.type === 'Income')
        .reduce((sum, t) => sum + +t.ammount, 0);
        console.log(calculatedIncome);

      const calculatedExpenses = transactions
        .filter((t) => t.type === 'Expense')
        .reduce((sum, t) => sum + +t.ammount, 0);

      setIncome(calculatedIncome);
      setExpenses(calculatedExpenses);
      setBalance(calculatedIncome - calculatedExpenses);
    }
  }, [isSuccess, transactions]);

  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ paddingBlock: 2, width: "100%" }}>
          <Typography variant="h1">Overview</Typography>
          <Typography variant="h6">
            A snapshot of your financial health
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid>
          <PersonalFinancesCard
            title="Income"
            value={income}
            icon={<Work sx={{ color: "green" }} />}
            chartType={[1, 4, 2, 5, 7, 2, 4, 6]}
          />
        </Grid>
        <Grid>
          <PersonalFinancesCard
            title="Expenses"
            value={expenses}
            icon={
              <ShoppingCartCheckout sx={{ color: "green" }} />
            }
            chartType={[3, -10, -2, 5, 7, -2, 4, 6]}
          />
        </Grid>
        <Grid>
          <PersonalFinancesCard
            title="Balance"
            value={balance}
            icon={<Balance sx={{ color: "green" }} />}
            chartType={[1, 3, 4, 5, 5, 6, 6, 8]}
          />
        </Grid>
        <Grid>
            <FinancialOverview transactions={transactions}/>
          </Grid>
        <Grid>
            <CategoryAllocationChart transactions={transactions}/>
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard;