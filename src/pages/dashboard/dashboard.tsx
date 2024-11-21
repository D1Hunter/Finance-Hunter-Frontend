import { Box, Grid2 as Grid, Typography } from "@mui/material"
import PersonalFinancesCard from "../../components/personal-finance-card.component";
import { AttachMoney, Balance, Savings, ShoppingCartCheckout, Work } from "@mui/icons-material";

const Dashboard = () => {
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
              value={220350}
              icon={<Work sx={{ color: "green" }} />}
              chartType={[1, 4, 2, 5, 7, 2, 4, 6]}
            />
          </Grid>
          <Grid>
            <PersonalFinancesCard
              title="Expenses"
              value={90550}
              icon={
                <ShoppingCartCheckout sx={{ color: "green"  }} />
              }
              chartType={[3, -10, -2, 5, 7, -2, 4, 6]}
            />
          </Grid>
          <Grid>
            <PersonalFinancesCard
              title="Balance"
              value={470560}
              icon={<Balance sx={{ color: "green"  }} />}
              chartType={[1, 3, 4, 5, 5, 6, 6, 8]}
            />
          </Grid>
          <Grid>
            <PersonalFinancesCard
              title="Savings"
              value={86723}
              icon={<Savings sx={{ color: "green" }} />}
              chartType={[3, -10, -2, 3, 4, -2, 4, 6]}
            />
          </Grid>
          <Grid>
            <PersonalFinancesCard
              title="Investments"
              value={115550}
              icon={<AttachMoney sx={{ color: "green" }} />}
              chartType={[1, 4, 2, 5, 7, 2, 4, 6]}
            />
          </Grid>
        </Grid>
        </>
    )
}

export default Dashboard;