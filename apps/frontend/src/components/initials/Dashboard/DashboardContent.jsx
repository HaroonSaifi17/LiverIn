const DashboardContent = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Welcome back, Freelancer!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Total Gigs</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Active Orders</h3>
          <p className="text-2xl font-bold">3</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Earnings</h3>
          <p className="text-2xl font-bold">₹18,500</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-2">Recent Gigs</h2>
        <div className="bg-white rounded shadow divide-y">
          {[
            "UI Design",
            "React Website",
            "Logo Design",
            "UI Design",
            "React Website",
            "Logo Design",
            "UI Design",
            "React Website",
            "Logo Design",
            "UI Design",
            "React Website",
            "Logo Design",
          ].map((gig, idx) => (
            <div
              key={idx}
              className="p-4 hover:bg-gray-50 flex justify-between"
            >
              <span>{gig}</span>
              <span className="text-green-500 text-sm">Active</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
