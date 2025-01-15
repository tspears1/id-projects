"use client";

// React ====================================
import React from "react";

// Components ===============================
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from "../../ui/Breadcrumbs/Breadcrumbs.jsx";
import { BreadcrumbLink } from "../../ui/Breadcrumbs/Breadcrumbs.jsx";
import { BreadcrumbPage } from "../../ui/Breadcrumbs/Breadcrumbs.jsx";
import { SidebarTrigger } from "../../ui/Sidebar/Sidebar.jsx";
import { Separator } from "../../ui/Separator/Separator.jsx";

// Toolbar ==================================
/**
 * @component Toolbar - Main application component.
 *
 * @param {Object} props - Component props.
 *
 * @returns {JSX.Element}
 */
const Toolbar = () => {

  return (
    <header className="toolbar">
      <div className="toolbar__container">
        <SidebarTrigger />
        <Separator orientation="vertical" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Projects
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                Sprints
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};

export { Toolbar };
