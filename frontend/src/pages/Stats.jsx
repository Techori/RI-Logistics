import React, { useEffect, useState } from "react";

const Stats = () => {
  const [stats, setStats] = useState({
    fleet: {},
    franchise: {},
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use relative URL - Vite proxy will handle it
        const res = await fetch("/api/dashboard-stats");
        if (!res.ok) throw new Error("Failed to fetch stats");

        const result = await res.json();
        if (!result.success) throw new Error("Failed to fetch stats");

        setStats(result.data);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div>Loading stats...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div className="p-4 space-y-6">
      {/* Fleet Owner Stats */}
      <div className="p-4 bg-white shadow rounded-lg">
        <h2 className="text-xl font-bold mb-4">Fleet Owner Stats</h2>
        <div className="grid grid-cols-2 gap-2">
          <div>Total Registrations: {stats.fleet.total}</div>
          <div>Registrations Today: {stats.fleet.today}</div>
          <div>Pending KYC: {stats.fleet.pending}</div>
          <div>Verified: {stats.fleet.verified}</div>
          <div>Rejected: {stats.fleet.rejected}</div>
        </div>
      </div>

      {/* Franchise Partner Stats */}
      <div className="p-4 bg-white shadow rounded-lg">
        <h2 className="text-xl font-bold mb-4">Franchise Partner Stats</h2>
        <div className="grid grid-cols-2 gap-2">
          <div>Total Registrations: {stats.franchise.total}</div>
          <div>Registrations Today: {stats.franchise.today}</div>
          <div>Pending KYC: {stats.franchise.pending}</div>
          <div>Verified: {stats.franchise.verified}</div>
          <div>Rejected: {stats.franchise.rejected}</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;