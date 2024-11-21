import { Box, Card, CardContent, Typography } from "@mui/material";

interface PersonalFinancesCardProps {
    title: string;
    value: number;
    icon: React.ReactNode;
    chartType: number[];
  }  

const PersonalFinancesCard = ({title,value,icon,chartType}: PersonalFinancesCardProps) => {
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
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "1rem",
            width: "max(30%, 50%)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {icon}
          </Box>
          <Typography variant="h3">${value}</Typography>
          <Typography variant="h6" color="gray">
            {title}
          </Typography>
        </CardContent>
      </Card>
    );
}

export default PersonalFinancesCard;