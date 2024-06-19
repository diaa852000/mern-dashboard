
import {
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutline
} from '@mui/icons-material'

const icons = {
    HomeOutlined: <HomeOutlined />,
    ShoppingCartOutlined: <ShoppingCartOutlined />,
    Groups2Outlined: <Groups2Outlined />,
    ReceiptLongOutlined: <ReceiptLongOutlined />,
    PublicOutlined: <PublicOutlined />,
    PointOfSaleOutlined: <PointOfSaleOutlined />,
    TodayOutlined: <TodayOutlined />,
    CalendarMonthOutlined: <CalendarMonthOutlined />,
    AdminPanelSettingsOutlined: <AdminPanelSettingsOutlined />,
    TrendingUpOutlined: <TrendingUpOutlined />,
    PieChartOutline: <PieChartOutline />
};

const navItems = [
    {
        text: "Dashboard",
        icon: icons.HomeOutlined
    },
    {
        text: "Client Facing",
        icon: null
    },
    {
        text: "Products",
        icon: icons.ShoppingCartOutlined
    },
    {
        text: "Customers",
        icon: icons.Groups2Outlined
    },
    {
        text: "Transactions",
        icon: icons.ReceiptLongOutlined
    },
    {
        text: "Geography",
        icon: icons.PublicOutlined
    },
    {
        text: "Sales",
        icon: null
    },
    {
        text: "Overview",
        icon: icons.PointOfSaleOutlined
    },
    {
        text: "Daily",
        icon: icons.TodayOutlined
    },
    {
        text: "Monthly",
        icon: icons.CalendarMonthOutlined
    },
    {
        text: "Breakdown",
        icon: icons.PieChartOutline
    },
    {
        text: "Management",
        icon: null
    },
    {
        text: "Admin",
        icon: icons.AdminPanelSettingsOutlined
    },
    {
        text: "Performance",
        icon: icons.TrendingUpOutlined
    }
];

export default navItems;