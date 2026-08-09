import { NavLink } from "react-router-dom";
import {
  Home,
  PlaySquare,
  Compass,
  MessageCircle,
  Bell,
  CalendarDays,
  Users,
  GraduationCap,
  ShoppingBag,
  Settings,
  UserRound,
} from "lucide-react";

import "./AppSidebar.css";

const desktopNavItems = [
  {
    label: "Home",
    path: "/",
    icon: Home,
  },
  {
    label: "Reels",
    path: "/reels",
    icon: PlaySquare,
  },
  {
    label: "Explore",
    path: "/explore",
    icon: Compass,
  },
  {
    label: "Messages",
    path: "/messages",
    icon: MessageCircle,
    badge: 3,
  },
  {
    label: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
  {
    label: "Events",
    path: "/events",
    icon: CalendarDays,
  },
  {
    label: "Clubs",
    path: "/clubs",
    icon: Users,
  },
  {
    label: "College Feed",
    path: "/college-feed",
    icon: GraduationCap,
  },
  {
    label: "Marketplace",
    path: "/marketplace",
    icon: ShoppingBag,
  },
];

const mobileNavItems = [
  {
    label: "Home",
    path: "/",
    icon: Home,
  },
  {
    label: "Reels",
    path: "/reels",
    icon: PlaySquare,
  },
  {
    label: "College Feed",
    path: "/college-feed",
    icon: GraduationCap,
  },
  {
    label: "Clubs",
    path: "/clubs",
    icon: Users,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: UserRound,
  },
];

const bottomItems = [
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: UserRound,
  },
];

function SidebarLink({ item }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        `sidebar-link ${isActive ? "active" : ""}`
      }
    >
      <span className="sidebar-icon">
        <Icon size={22} strokeWidth={2} />
      </span>

      <span className="sidebar-label">
        {item.label}
      </span>

      {item.badge && (
        <span className="sidebar-badge">
          {item.badge}
        </span>
      )}
    </NavLink>
  );
}

function MobileNavLink({ item }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        `mobile-nav-link ${isActive ? "active" : ""}`
      }
    >
      <Icon size={23} strokeWidth={2} />
    </NavLink>
  );
}

export default function AppSidebar() {
  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}

      <aside className="app-sidebar">
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="logo-mark">
            CC
          </div>

          <span className="logo-text">
            CampusConnect
          </span>
        </div>

        {/* Main Navigation */}
        <nav className="sidebar-navigation">
          <div className="sidebar-main-links">
            {desktopNavItems.map((item) => (
              <SidebarLink
                key={item.path}
                item={item}
              />
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="sidebar-bottom-links">
            {bottomItems.map((item) => (
              <SidebarLink
                key={item.path}
                item={item}
              />
            ))}
          </div>
        </nav>
      </aside>

      {/* ================= MOBILE BOTTOM NAV ================= */}

      <nav className="mobile-bottom-navigation">
        {mobileNavItems.map((item) => (
          <MobileNavLink
            key={item.path}
            item={item}
          />
        ))}
      </nav>
    </>
  );
}