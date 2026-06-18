// Focus Tracker Mockup
export const FocusTrackerMockup = () => (
  <svg
    viewBox="0 0 1200 900"
    className="w-full h-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect width="1200" height="900" fill="#f8f9fa" />

    {/* Header */}
    <rect width="1200" height="80" fill="#1e40af" />
    <text x="40" y="50" fontSize="32" fontWeight="bold" fill="white" fontFamily="Inter">
      Focus Tracker
    </text>
    <circle cx="1100" cy="40" r="20" fill="#3b82f6" />

    {/* Sidebar */}
    <rect width="280" height="820" y="80" fill="#1e3a8a" />
    <text x="40" y="130" fontSize="18" fontWeight="bold" fill="white" fontFamily="Inter">
      Dashboard
    </text>
    <text x="40" y="180" fontSize="14" fill="#93c5fd" fontFamily="Inter">
      Active Sessions
    </text>
    <text x="40" y="230" fontSize="14" fill="#bfdbfe" fontFamily="Inter">
      Reports
    </text>
    <text x="40" y="280" fontSize="14" fill="#bfdbfe" fontFamily="Inter">
      Payroll
    </text>
    <text x="40" y="330" fontSize="14" fill="#bfdbfe" fontFamily="Inter">
      Settings
    </text>

    {/* Main Content */}
    <rect x="300" y="120" width="870" height="700" fill="white" rx="12" />

    {/* Title */}
    <text x="340" y="170" fontSize="28" fontWeight="bold" fill="#1f2937" fontFamily="Inter">
      Team Activity Overview
    </text>

    {/* Stats Cards */}
    <g>
      {/* Card 1 */}
      <rect x="340" y="200" width="250" height="140" fill="#f3f4f6" rx="8" />
      <text x="360" y="235" fontSize="14" fill="#6b7280" fontFamily="Inter">
        Productive Time Today
      </text>
      <text x="360" y="280" fontSize="48" fontWeight="bold" fill="#10b981" fontFamily="Inter">
        7.5h
      </text>
      <text x="360" y="310" fontSize="12" fill="#9ca3af" fontFamily="Inter">
        ↑ 12% from yesterday
      </text>

      {/* Card 2 */}
      <rect x="620" y="200" width="250" height="140" fill="#f3f4f6" rx="8" />
      <text x="640" y="235" fontSize="14" fill="#6b7280" fontFamily="Inter">
        Break Time
      </text>
      <text x="640" y="280" fontSize="48" fontWeight="bold" fill="#f59e0b" fontFamily="Inter">
        45m
      </text>
      <text x="640" y="310" fontSize="12" fill="#9ca3af" fontFamily="Inter">
        Within healthy range
      </text>

      {/* Card 3 */}
      <rect x="900" y="200" width="250" height="140" fill="#f3f4f6" rx="8" />
      <text x="920" y="235" fontSize="14" fill="#6b7280" fontFamily="Inter">
        Team Members Active
      </text>
      <text x="920" y="280" fontSize="48" fontWeight="bold" fill="#3b82f6" fontFamily="Inter">
        24/28
      </text>
      <text x="920" y="310" fontSize="12" fill="#9ca3af" fontFamily="Inter">
        86% engagement rate
      </text>
    </g>

    {/* Chart Area */}
    <rect x="340" y="380" width="810" height="300" fill="white" stroke="#e5e7eb" strokeWidth="1" rx="8" />
    <text x="360" y="415" fontSize="16" fontWeight="bold" fill="#1f2937" fontFamily="Inter">
      Weekly Productivity Trend
    </text>

    {/* Chart Bars */}
    <g>
      <rect x="400" y="480" width="40" height="200" fill="#3b82f6" rx="4" />
      <text x="405" y="690" fontSize="12" fill="#6b7280" fontFamily="Inter">
        Mon
      </text>
      <rect x="500" y="420" width="40" height="260" fill="#10b981" rx="4" />
      <text x="505" y="690" fontSize="12" fill="#6b7280" fontFamily="Inter">
        Tue
      </text>
      <rect x="600" y="450" width="40" height="230" fill="#3b82f6" rx="4" />
      <text x="605" y="690" fontSize="12" fill="#6b7280" fontFamily="Inter">
        Wed
      </text>
      <rect x="700" y="380" width="40" height="300" fill="#10b981" rx="4" />
      <text x="705" y="690" fontSize="12" fill="#6b7280" fontFamily="Inter">
        Thu
      </text>
      <rect x="800" y="460" width="40" height="220" fill="#3b82f6" rx="4" />
      <text x="805" y="690" fontSize="12" fill="#6b7280" fontFamily="Inter">
        Fri
      </text>
      <rect x="900" y="520" width="40" height="160" fill="#f59e0b" rx="4" />
      <text x="905" y="690" fontSize="12" fill="#6b7280" fontFamily="Inter">
        Sat
      </text>
      <rect x="1000" y="540" width="40" height="140" fill="#f59e0b" rx="4" />
      <text x="1005" y="690" fontSize="12" fill="#6b7280" fontFamily="Inter">
        Sun
      </text>
    </g>
  </svg>
);

// RevSlack AI Mockup
export const RevSlackMockup = () => (
  <svg
    viewBox="0 0 1200 900"
    className="w-full h-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect width="1200" height="900" fill="#f5f5f5" />

    {/* Header */}
    <rect width="1200" height="70" fill="white" stroke="#e5e5e5" strokeWidth="1" />
    <text x="40" y="45" fontSize="24" fontWeight="bold" fill="#2d2d2d" fontFamily="Inter">
      RevSlack AI
    </text>
    <text x="40" y="65" fontSize="12" fill="#999" fontFamily="Inter">
      Task Management via Slack
    </text>

    {/* Main Container */}
    <g>
      {/* Left Panel - Slack Conversation */}
      <rect x="20" y="90" width="580" height="790" fill="white" rx="12" stroke="#ddd" strokeWidth="1" />

      {/* Chat Header */}
      <rect x="20" y="90" width="580" height="50" fill="#f9f9f9" rx="12" strokeWidth="0" />
      <text x="40" y="120" fontSize="14" fontWeight="bold" fill="#333" fontFamily="Inter">
        #product-team
      </text>

      {/* Messages */}
      <g>
        {/* Message 1 */}
        <circle cx="50" cy="180" r="18" fill="#e0e0e0" />
        <text x="85" y="175" fontSize="12" fontWeight="bold" fill="#333" fontFamily="Inter">
          Alex Chen
        </text>
        <text x="85" y="195" fontSize="13" fill="#555" fontFamily="Inter">
          Hey! Can you create a task for the Q2 planning?
        </text>

        {/* Message 2 - AI Response */}
        <circle cx="50" cy="280" r="18" fill="#3b82f6" />
        <text x="85" y="275" fontSize="12" fontWeight="bold" fill="#1e40af" fontFamily="Inter">
          RevSlack AI
        </text>
        <text x="85" y="295" fontSize="13" fill="#333" fontFamily="Inter">
          Sure! Creating task "Q2 Planning" in Jira...
        </text>
        <text x="85" y="315" fontSize="12" fill="#666" fontFamily="Inter" fontStyle="italic">
          ✓ Task created. ID: PROJ-2847
        </text>

        {/* Message 3 */}
        <circle cx="50" cy="380" r="18" fill="#e0e0e0" />
        <text x="85" y="375" fontSize="12" fontWeight="bold" fill="#333" fontFamily="Inter">
          Alex Chen
        </text>
        <text x="85" y="395" fontSize="13" fill="#555" fontFamily="Inter">
          Add it to the roadmap with priority high
        </text>

        {/* Message 4 - AI Response */}
        <circle cx="50" cy="480" r="18" fill="#3b82f6" />
        <text x="85" y="475" fontSize="12" fontWeight="bold" fill="#1e40af" fontFamily="Inter">
          RevSlack AI
        </text>
        <text x="85" y="495" fontSize="13" fill="#333" fontFamily="Inter">
          Updated! Added to roadmap with priority: HIGH
        </text>
        <text x="85" y="515" fontSize="12" fill="#666" fontFamily="Inter" fontStyle="italic">
          ✓ Task assigned to you. Due: 2025-06-30
        </text>
      </g>

      {/* Input Area */}
      <rect x="30" y="800" width="560" height="60" fill="#f9f9f9" rx="8" stroke="#ddd" strokeWidth="1" />
      <text x="50" y="835" fontSize="13" fill="#999" fontFamily="Inter">
        Ask me to create tasks, send updates, assign issues...
      </text>
    </g>

    {/* Right Panel - Quick Actions */}
    <rect x="620" y="90" width="560" height="790" fill="white" rx="12" stroke="#ddd" strokeWidth="1" />

    {/* Actions Header */}
    <text x="640" y="135" fontSize="16" fontWeight="bold" fill="#333" fontFamily="Inter">
      Quick Actions
    </text>

    {/* Action Cards */}
    <g>
      {/* Create Task */}
      <rect x="640" y="160" width="520" height="80" fill="#f0f9ff" stroke="#3b82f6" strokeWidth="2" rx="8" />
      <circle cx="680" cy="200" r="16" fill="#3b82f6" />
      <text x="705" y="195" fontSize="14" fontWeight="bold" fill="#333" fontFamily="Inter">
        Create Task
      </text>
      <text x="705" y="215" fontSize="12" fill="#666" fontFamily="Inter">
        Say: "Create task [name]"
      </text>

      {/* Send Update */}
      <rect x="640" y="270" width="520" height="80" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" rx="8" />
      <circle cx="680" cy="310" r="16" fill="#10b981" />
      <text x="705" y="305" fontSize="14" fontWeight="bold" fill="#333" fontFamily="Inter">
        Send Update to Team
      </text>
      <text x="705" y="325" fontSize="12" fill="#666" fontFamily="Inter">
        Say: "Send update [message]"
      </text>

      {/* Create Jira Ticket */}
      <rect x="640" y="380" width="520" height="80" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="8" />
      <circle cx="680" cy="420" r="16" fill="#f59e0b" />
      <text x="705" y="415" fontSize="14" fontWeight="bold" fill="#333" fontFamily="Inter">
        Create Jira Ticket
      </text>
      <text x="705" y="435" fontSize="12" fill="#666" fontFamily="Inter">
        Say: "Create issue [title]"
      </text>

      {/* Assign Task */}
      <rect x="640" y="490" width="520" height="80" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="2" rx="8" />
      <circle cx="680" cy="530" r="16" fill="#8b5cf6" />
      <text x="705" y="525" fontSize="14" fontWeight="bold" fill="#333" fontFamily="Inter">
        Assign Tasks
      </text>
      <text x="705" y="545" fontSize="12" fill="#666" fontFamily="Inter">
        Say: "Assign [task] to [person]"
      </text>

      {/* Get Status */}
      <rect x="640" y="600" width="520" height="80" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" rx="8" />
      <circle cx="680" cy="640" r="16" fill="#ec4899" />
      <text x="705" y="635" fontSize="14" fontWeight="bold" fill="#333" fontFamily="Inter">
        Check Status
      </text>
      <text x="705" y="655" fontSize="12" fill="#666" fontFamily="Inter">
        Say: "What's the status of [task]?"
      </text>

      {/* Get Report */}
      <rect x="640" y="710" width="520" height="80" fill="#dbeafe" stroke="#06b6d4" strokeWidth="2" rx="8" />
      <circle cx="680" cy="750" r="16" fill="#06b6d4" />
      <text x="705" y="745" fontSize="14" fontWeight="bold" fill="#333" fontFamily="Inter">
        Generate Report
      </text>
      <text x="705" y="765" fontSize="12" fill="#666" fontFamily="Inter">
        Say: "Generate report for [period]"
      </text>
    </g>
  </svg>
);
