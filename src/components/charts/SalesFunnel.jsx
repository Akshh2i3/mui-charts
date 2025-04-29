import { useState } from "react";
import { FunnelChart, Funnel, LabelList, Cell } from "recharts";
import { Box, Typography, Button, Stack } from "@mui/material";

export default function FixedShapeFunnelChart() {
    const [data, setData] = useState([
        { name: "Front end", value: 120, fill: "#E8EAF6" },
        { name: "Underwriting", value: 100, fill: "#C5CAE9" },
        { name: "Credit Review", value: 80, fill: "#9FA8DA" },
        { name: "Processing", value: 60, fill: "#7986CB" },
        { name: "Closing", value: 40, fill: "#5C6BC0" },
        { name: "Funded", value: 20, fill: "#3F51B5" }
    ]);

    const normalizeData = () => {
        setData(data.map(item => ({ ...item, value: 100 })));
    };

    const resetData = () => {
        setData([
            { name: "Front end", value: 120, fill: "#E8EAF6" },
            { name: "Underwriting", value: 100, fill: "#C5CAE9" },
            { name: "Credit Review", value: 80, fill: "#9FA8DA" },
            { name: "Processing", value: 60, fill: "#7986CB" },
            { name: "Closing", value: 40, fill: "#5C6BC0" },
            { name: "Funded", value: 20, fill: "#3F51B5" }
        ]);
    };

    const randomizeData = () => {
        setData([
            { name: "Front end", value: Math.floor(Math.random() * 150) + 100, fill: "#E8EAF6" },
            { name: "Underwriting", value: Math.floor(Math.random() * 100) + 80, fill: "#C5CAE9" },
            { name: "Credit Review", value: Math.floor(Math.random() * 80) + 60, fill: "#9FA8DA" },
            { name: "Processing", value: Math.floor(Math.random() * 60) + 40, fill: "#7986CB" },
            { name: "Closing", value: Math.floor(Math.random() * 40) + 20, fill: "#5C6BC0" },
            { name: "Funded", value: Math.floor(Math.random() * 20) + 10, fill: "#3F51B5" }
        ]);
    };

    return (
        <Box sx={{ width: '100%', p: 2 }}>
            <Typography variant="h6" sx={{ mb: 3 }}>
                Stage Wise Loan Distribution
            </Typography>
            
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mb: 4 }}>
                <Button
                    variant="contained"
                    onClick={normalizeData}
                    sx={{ bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
                >
                    Equal Values
                </Button>
                <Button
                    variant="contained"
                    onClick={resetData}
                    sx={{ bgcolor: 'success.main', '&:hover': { bgcolor: 'success.dark' } }}
                >
                    Reset Values
                </Button>
                <Button
                    variant="contained"
                    onClick={randomizeData}
                    sx={{ bgcolor: 'secondary.main', '&:hover': { bgcolor: 'secondary.dark' } }}
                >
                    Random Values
                </Button>
            </Stack>

            <Box sx={{ 
                height: '400px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
            }}>
                <FunnelChart width={800} height={400}>
                    <Funnel
                        dataKey="value"
                        data={data}
                        isAnimationActive
                        width="80%"
                        neckWidth="30%"
                        neckHeight="0%"
                        gradientRatio={[]}
                    >
                        <LabelList
                            position="right"
                            fill="#000"
                            stroke="none"
                            dataKey="name"
                            fontSize={14}
                        />
                        <LabelList
                            position="center"
                            fill="#000"
                            stroke="none"
                            dataKey="value"
                            fontSize={24}
                        />
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Funnel>
                </FunnelChart>
            </Box>
        </Box>
    );
}



// import { Box, Typography } from '@mui/material';
// import { FunnelChart, Funnel, LabelList, Tooltip } from 'recharts';

// export default function SalesFunnel() {
//   const data = [
//     { name: 'Front end', value: 140, fill: '#E8EAF6' },
//     { name: 'Underwriting', value: 125, fill: '#C5CAE9' },
//     { name: 'Credit Review', value: 125, fill: '#9FA8DA' },
//     { name: 'Processing', value: 120, fill: '#7986CB' },
//     { name: 'Closing', value: 120, fill: '#5C6BC0' },
//     { name: 'Funded', value: 120, fill: '#3F51B5' }
//   ];

//   return (
//     <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
//       <Typography variant="h6">Stage Wise Loan Distribution</Typography>
//       <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, ml: 2 }}>
//         <FunnelChart width={700} height={300}>
//           <Tooltip />
//           <Funnel
//             dataKey="value"
//             data={data}
//             isAnimationActive
//             orientation="horizontal"
//           >
//             <LabelList 
//               position="left" 
//               fill="#000" 
//               stroke="none" 
//               dataKey="name"
//               offset={20}
//             />
//             <LabelList 
//               position="center" 
//               fill="#000" 
//               stroke="none" 
//               dataKey="value"
//             />
//           </Funnel>
//         </FunnelChart>
//       </Box>
//     </Box>
//   );
// }