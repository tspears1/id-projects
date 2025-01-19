"use client";

// React ====================================
import React from "react";

// Components ===============================
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage
} from "../../ui/Breadcrumbs/Breadcrumbs.jsx";
import { SidebarTrigger } from "../../ui/Sidebar/Sidebar.jsx";
import { Separator } from "../../ui/Separator/Separator.jsx";
import { Filters } from "../../molecules/Filters/Filters.jsx";

// Context ==================================
import { useStore } from "../../../context/store/useStore.js";

// Toolbar ==================================
/**
 * @component Toolbar - Main application component.
 *
 * @param {Object} props - Component props.
 *
 * @returns {JSX.Element}
 */
const Toolbar = () => {
  const { activeProject, activePhase } = useStore();

  return (
    <header className="toolbar">
      <div className="toolbar__container">
        <SidebarTrigger className="toolbar__trigger" />
        <Separator orientation="vertical" />
        { (activeProject || activePhase) &&
          <Breadcrumb className="toolbar__breadcrumb">
            <BreadcrumbList>
              { activeProject &&
                <>
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      { activeProject.title }
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              }
              { activePhase &&
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    { activePhase.label }
                  </BreadcrumbPage>
                </BreadcrumbItem>
              }
            </BreadcrumbList>
          </Breadcrumb>
        }
        <Filters />
      </div>
    </header>
  );
};

export { Toolbar };
