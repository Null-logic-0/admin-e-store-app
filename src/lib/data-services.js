import { redirect } from "next/navigation";
import { getCookie } from "./cookies";
import { db } from "./db";
import { verifyJWT } from "./utils";
import { deleteCookies } from "@/actions/authActions";
import { formatDate } from "@/helpers/formatDate";

export const getUsers = async () => {
  await jwtTokenVerification();

  const users = await db.adminUser.findMany();
  return users;
};

export const getUniqueUser = async (userId) => {
  await jwtTokenVerification();

  const user = await db.adminUser.findUnique({
    where: {
      id: parseInt(userId),
    },
  });

  return user;
};

export const getProductTypes = async () => {
  await jwtTokenVerification();
  const productTypes = await db.productType.findMany();
  return productTypes;
};

export const getUniqueProductType = async (productTypeId) => {
  await jwtTokenVerification();
  const productType = await db.productType.findUnique({
    where: {
      id: parseInt(productTypeId),
    },
  });

  return productType;
};

export const getproducts = async () => {
  await jwtTokenVerification();

  const products = await db.product.findMany();
  return products;
};

export const getUniqueProduct = async (productId) => {
  await jwtTokenVerification();

  const product = await db.product.findUnique({
    where: {
      id: parseInt(productId),
    },
  });

  return product;
};

export async function jwtTokenVerification() {
  const token = getCookie("jwt_token");
  const tokenData = await verifyJWT(token);

  if (!tokenData) {
    deleteCookies("jwt_token");
    return redirect("/login");
  }

  return tokenData;
}

export async function getUserData() {
  const decodedToken = await jwtTokenVerification();
  const userData = await db.adminUser.findUnique({
    where: {
      id: decodedToken.id,
    },
  });

  return userData;
}

export async function getBuyersData() {
  await jwtTokenVerification();

  const buyers = await db.buyerMaster.findMany({
    where: {
      sales: {
        some: {},
      },
    },
  });
  return buyers;
}

export async function getDashboardData() {
  const customerData = await db.buyerMaster.findMany({
    orderBy: {
      createdAt: "asc",
    },
    include: {
      sales: true,
    },
  });
  const salesMasterData = await db.salesMaster.findMany({
    include: {
      buyer: true,
      salesTransactions: true,
    },
    orderBy: {
      SODateTime: "desc",
    },
  });

  const totalBuyers = customerData?.filter(
    (customer) => customer.sales?.length > 0
  ).length;
  const totalRevenue = salesMasterData.reduce(
    (acc, sale) => acc + sale.grandTotalPrice,
    0
  );
  const salesByDate = salesMasterData.reduce((acc, sale) => {
    const date = formatDate(sale.SODateTime);

    if (!acc[date]) {
      acc[date] = {
        date,
        sales: 0,
      };
    }
    acc[date].sales += sale.grandTotalPrice;

    return acc;
  }, {});

  const customersByDate = customerData.reduce((acc, customer) => {
    const date = formatDate(customer.createdAt);

    if (!acc[date]) {
      acc[date] = {
        date,
        count: 0,
      };
    }
    acc[date].count += 1;

    return acc;
  }, {});

  const dashboardData = {
    totalBuyers,
    totalCustomers: customerData.length,
    totalRevenue,
    orders: salesMasterData?.splice(0, 5),
    salesChartData: Object.values(salesByDate).reverse(),
    customerChartData: Object.values(customersByDate),
  };

  return dashboardData;
}
