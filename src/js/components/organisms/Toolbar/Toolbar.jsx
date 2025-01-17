"use client";

// React ====================================
import React from "react";

// Components ===============================
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from "../../ui/Breadcrumbs/Breadcrumbs.jsx";
import { BreadcrumbLink } from "../../ui/Breadcrumbs/Breadcrumbs.jsx";
import { BreadcrumbPage } from "../../ui/Breadcrumbs/Breadcrumbs.jsx";
import { SidebarTrigger } from "../../ui/Sidebar/Sidebar.jsx";
import { Separator } from "../../ui/Separator/Separator.jsx";
import { Icon } from "../../atoms/Icon/Icon.jsx";
import { Button } from "../../ui/Button/Button.jsx";

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
        <SidebarTrigger className="toolbar__trigger" />
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
        <div className='layout-filter' style={{ display: 'flex', gap: 'var(--shim-2)' }}>
          <Button variant='ghost' size='icon' tooltip='Table View'>
            <Icon icon='table' />
          </Button>
          <Button variant='ghost' size='icon' tooltip='Grid View'>
            <Icon icon='squares-four' />
          </Button>
        </div>
      </div>
    </header>
  );
};

export { Toolbar };
