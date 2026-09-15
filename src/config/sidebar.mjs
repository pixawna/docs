// Shared source of truth for Astro navigation and llms.txt generation.
export const sidebar = [
  {
    label: "1. Get Started",
    collapsed: true,
    items: [
      { label: "Introduction", slug: "get-started/overview" },
      { label: "How SuperPlane works", slug: "get-started/how-superplane-works" },
      { label: "Quickstart", slug: "get-started/quickstart" },
      { label: "Build your first Factory", slug: "get-started/build-first-factory" },
      { label: "Prepare", slug: "get-started/prepare" },
      { label: "Create a workspace", slug: "get-started/create-workspace" },
      { label: "Configure lines and automations", slug: "get-started/lines-and-automations" },
      { label: "Run a task", slug: "get-started/run-task" },
    ],
  },
  {
    label: "2. Software Factory Fundamentals",
    collapsed: true,
    items: [
      { label: "How one-shot engineering works", slug: "fundamentals/one-shot-engineering" },
      {
        label: "The Factory pipeline",
        collapsed: true,
        items: [
          { label: "Pipeline overview", slug: "fundamentals/factory-pipeline" },
          { label: "Work intake and backlog", slug: "fundamentals/work-intake" },
          { label: "Implement", slug: "fundamentals/implement" },
          { label: "Verify", slug: "fundamentals/verify" },
          { label: "Done", slug: "fundamentals/done" },
        ],
      },
      {
        label: "Automations",
        collapsed: true,
        items: [
          { label: "Automation overview", slug: "fundamentals/automations" },
          { label: "Backlog automation", slug: "fundamentals/automation-backlog" },
          { label: "Implement automation", slug: "fundamentals/automation-implement" },
          { label: "Verify automation", slug: "fundamentals/automation-verify" },
          { label: "Done automation", slug: "fundamentals/automation-done" },
        ],
      },
      {
        label: "Factory performance",
        collapsed: true,
        items: [
          { label: "Performance overview", slug: "fundamentals/factory-performance" },
          { label: "Task time", slug: "fundamentals/performance-task-time" },
          { label: "Costs", slug: "fundamentals/performance-costs" },
          { label: "People and automations", slug: "fundamentals/performance-people-automations" },
        ],
      },
    ],
  },
  {
    label: "3. Use Cases",
    collapsed: true,
    items: [
      { label: "Use cases overview", slug: "use-cases/overview" },
      { label: "Fix a GitHub issue", slug: "use-cases/fix-github-issue" },
      { label: "Make small code improvements", slug: "use-cases/small-code-improvements" },
      { label: "Fix a failing test", slug: "use-cases/fix-failing-test" },
      { label: "Update dependencies", slug: "use-cases/dependency-updates" },
      { label: "Investigate an incident", slug: "use-cases/investigate-incident" },
      { label: "Review and fix pull requests", slug: "use-cases/review-fix-pull-requests" },
    ],
  },
  {
    label: "4. Integrations and Components",
    collapsed: true,
    items: [
      { label: "Source control and work intake", slug: "integrations/source-control" },
      { label: "Coding agents and AI", slug: "integrations/coding-agents-ai" },
      { label: "CI/CD", slug: "integrations/ci-cd" },
      { label: "Observability", slug: "integrations/observability" },
      { label: "Cloud and infrastructure", slug: "integrations/cloud-infrastructure" },
      { label: "Custom integrations", slug: "integrations/custom-integrations" },
      { label: "All components", slug: "components" },
    ],
  },
  {
    label: "5. Operate",
    collapsed: true,
    items: [
      { label: "Workspace settings", slug: "operate/workspace-settings" },
      { label: "Tasks that need attention", slug: "operate/tasks-attention" },
      { label: "Run history", slug: "operate/runs-history" },
      { label: "Velocity analytics", slug: "operate/velocity-analytics" },
      { label: "Spending", slug: "operate/spending" },
      { label: "Secrets and API keys", slug: "operate/secrets-api-keys" },
      { label: "Self-hosting", slug: "operate/self-hosting" },
    ],
  },
  {
    label: "6. Expressions",
    collapsed: true,
    items: [
      { label: "Expression guide", slug: "expressions/guide" },
      { label: "Functions", slug: "expressions/functions" },
    ],
  },
  {
    label: "7. Security",
    collapsed: true,
    items: [
      { label: "Authentication and accounts", slug: "security/authentication" },
      { label: "Secrets", slug: "security/secrets" },
      { label: "Access control", slug: "security/access-control" },
      { label: "API keys", slug: "security/api-keys" },
    ],
  },
  {
    label: "8. Reference",
    collapsed: true,
    items: [
      { label: "Glossary", slug: "reference/glossary" },
      { label: "API", slug: "reference/api" },
      { label: "CLI", slug: "reference/cli" },
      { label: "MCP", slug: "reference/mcp" },
      { label: "Configuration", slug: "reference/configuration" },
      { label: "Canvas YAML", slug: "reference/canvas-yaml" },
      { label: "Console YAML", slug: "reference/console-yaml" },
      { label: "Workflows and components", slug: "reference/workflows-components" },
    ],
  },
  {
    label: "9. Billing",
    collapsed: true,
    items: [
      { label: "Overview", slug: "billing/overview" },
      { label: "Costs and budgets", slug: "billing/costs-budgets" },
    ],
  },
  {
    label: "10. Open Source",
    collapsed: true,
    items: [
      { label: "Why SuperPlane is open source", slug: "open-source/why-open-source" },
      {
        label: "GitHub repository",
        link: "https://github.com/superplanehq/superplane",
        attrs: { target: "_blank", rel: "noopener noreferrer" },
      },
      { label: "Contributing", slug: "open-source/contributing" },
      { label: "Community", slug: "open-source/community" },
    ],
  },
  {
    label: "11. Support and Help",
    collapsed: true,
    items: [
      {
        label: "Discord Community",
        link: "https://discord.superplane.com/",
        attrs: { target: "_blank", rel: "noopener noreferrer" },
      },
      { label: "Report a bug", slug: "troubleshooting/report-bug" },
    ],
  },
  {
    label: "12. Release Notes",
    collapsed: true,
    items: [
      { label: "Latest release", slug: "release-notes/latest" },
      { label: "Product & Integration updates", slug: "release-notes/product-updates" },
    ],
  },
];
