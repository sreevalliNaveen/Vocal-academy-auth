const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const validateToken = (token) => {
  if (!token || token !== "dummy-jwt-token") {
    throw { status: 401, message: "Invalid token" };
  }
};

export async function fetchStudentDashboard(token, role) {
  await delay(800);
  validateToken(token);

  if (role !== "student") {
    throw { status: 403, message: "Forbidden" };
  }

  return {
    courses: ["Bhairavi", "Kalyani", "Todi"],
    progress: "Intermediate",
  };
}

export async function fetchAdminData(token, role) {
  await delay(800);
  validateToken(token);

  if (role !== "admin" && role !== "director") {
    throw { status: 403, message: "Forbidden" };
  }

  return {
    studentsCount: 120,
    batches: 6,
  };
}

export async function fetchDirectorReports(token, role) {
  await delay(800);
  validateToken(token);

  if (role !== "director") {
    throw { status: 403, message: "Forbidden" };
  }

  return {
    revenue: "₹12,00,000",
    growth: "18%",
  };
}
