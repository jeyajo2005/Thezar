import { LayoutDashboard, Users, Calendar, MapPin, Radio, Search, Bell } from 'lucide-react';

export default function AdminTeaserSection() {
  const recentRegistrations = [
    { name: "Arun Kumar", district: "Tirunelveli", event: "Quiz", status: "Registered", time: "2 mins ago" },
    { name: "Priya S", district: "Madurai", event: "Innovation", status: "Registered", time: "10 mins ago" },
    { name: "Rahul M", district: "Chennai", event: "Cultural", status: "Registered", time: "18 mins ago" },
    { name: "Karthik K", district: "Coimbatore", event: "Hackathon", status: "Verified", time: "25 mins ago" }
  ];

  return (
    <section id="admin-teaser" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[12px] font-bold text-amber-400 tracking-[0.18em] uppercase">
              ADMIN CONTROL SYSTEM
            </span>
            <div
              className="w-10 h-[2px] rounded-full"
              style={{
                backgroundColor: '#D4A72C',
                boxShadow: '0 0 8px rgba(212, 167, 44, 0.30)',
              }}
            />
          </div>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold text-white tracking-[-0.035em] uppercase leading-[1.05]">
            CENTRALIZED <span className="text-gradient-gold">ADMIN MANAGEMENT</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
            Control center for state officials and district convenors to manage 38 district events, candidate passes, competition results, and live broadcasts.
          </p>
        </div>

        {/* Interactive Admin Panel Preview matching Section 5 in Image 2 */}
        <div className="glass-card rounded-3xl border border-slate-800 shadow-2xl overflow-hidden text-left">
          
          {/* Admin Header Bar */}
          <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs">
                TZ
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">THEZAR ADMIN PANEL</h4>
                <p className="text-[10px] text-slate-400">State Controller Workspace</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-xs text-slate-300">
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span>Search participants or districts...</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300">
                  <Bell className="w-4 h-4" />
                </span>
                <span className="text-xs font-bold text-red-300 bg-[#9e0804]/10 px-2.5 py-1 rounded-lg border border-[#9e0804]/20">
                  Super Admin
                </span>
              </div>
            </div>
          </div>

          {/* Admin Dashboard Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Admin Sidebar Navigation */}
            <div className="lg:col-span-3 bg-slate-950/60 border-r border-slate-800/80 p-4 space-y-1 hidden lg:block text-xs font-semibold">
              <div className="px-3 py-2 rounded-xl bg-[#9e0804] text-white flex items-center gap-2 font-bold">
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </div>
              <div className="px-3 py-2 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white flex items-center justify-between">
                <span>Manage Events</span>
                <span className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[10px]">42</span>
              </div>
              <div className="px-3 py-2 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white flex items-center justify-between">
                <span>38 Districts</span>
                <span className="bg-amber-400/10 text-amber-400 px-1.5 py-0.5 rounded text-[10px]">Active</span>
              </div>
              <div className="px-3 py-2 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white flex items-center gap-2">
                <span>Competitions Track</span>
              </div>
              <div className="px-3 py-2 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white flex items-center justify-between">
                <span>Participants</span>
                <span className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[10px]">8,420</span>
              </div>
              <div className="px-3 py-2 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white flex items-center gap-2">
                <span>Schedule & Results</span>
              </div>
              <div className="px-3 py-2 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white flex items-center gap-2">
                <span>Leaderboard Standings</span>
              </div>
              <div className="px-3 py-2 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white flex items-center gap-2">
                <span>Settings & Roles</span>
              </div>
            </div>

            {/* Admin Main Dashboard Content */}
            <div className="lg:col-span-9 p-6 space-y-6">
              
              {/* Stat Cards Row matching Section 5 Image 2 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Users className="w-4 h-4 text-red-300" />
                    <span>Total Participants</span>
                  </div>
                  <p className="text-2xl font-black text-white mt-1">8,420</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>Total Events</span>
                  </div>
                  <p className="text-2xl font-black text-white mt-1">42</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <MapPin className="w-4 h-4 text-red-300" />
                    <span>Districts</span>
                  </div>
                  <p className="text-2xl font-black text-white mt-1">38</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-[#9e0804]/40 bg-[#9e0804]/20">
                  <div className="flex items-center gap-2 text-xs text-red-300">
                    <Radio className="w-4 h-4 text-[#9e0804] animate-ping" />
                    <span>Live Stage</span>
                  </div>
                  <p className="text-2xl font-black text-red-300 mt-1">1 Live</p>
                </div>
              </div>

              {/* Progress & Recent Registrations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* District Progress Breakdown */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <h4 className="text-sm font-bold text-white">District Progress Tracker</h4>
                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between text-slate-300 font-medium mb-1">
                        <span>Completed Rounds</span>
                        <span className="font-mono text-emerald-400 font-bold">18 / 38</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[47%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 font-medium mb-1">
                        <span>Live Stage (Tirunelveli)</span>
                        <span className="font-mono text-red-300 font-bold">1 / 38</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                        <div className="h-full bg-[#9e0804] w-[3%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 font-medium mb-1">
                        <span>Upcoming District Rounds</span>
                        <span className="font-mono text-amber-400 font-bold">19 / 38</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                        <div className="h-full bg-amber-500 w-[50%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Candidate Registrations Table */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <h4 className="text-sm font-bold text-white">Recent Candidate Registrations</h4>
                  <div className="space-y-2 text-xs">
                    {recentRegistrations.map((reg, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800">
                        <div>
                          <p className="font-bold text-white">{reg.name}</p>
                          <p className="text-[10px] text-slate-400">{reg.district} • {reg.event}</p>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded">
                          {reg.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
