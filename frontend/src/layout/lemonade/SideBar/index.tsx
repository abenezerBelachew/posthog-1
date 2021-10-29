import { useValues } from 'kea'
import React from 'react'
import { LemonButton } from '../../../lib/components/LemonButton'
import { Lettermark } from '../../../lib/components/Lettermark/Lettermark'
import { organizationLogic } from '../../../scenes/organizationLogic'
import { teamLogic } from '../../../scenes/teamLogic'
import './index.scss'

export function ProjectSwitcher(): JSX.Element {
    const { currentTeam } = useValues(teamLogic)
    const { currentOrganization } = useValues(organizationLogic)

    return (
        <div className="ProjectSwitcher">
            <div className="ProjectSwitcher__label">Project</div>
            <LemonButton icon={<Lettermark name={currentOrganization?.name} />} fullWidth type="stealth">
                <b>{currentTeam?.name}</b>
            </LemonButton>
        </div>
    )
}

export function SideBar({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className="SideBar__layout">
            <div className="SideBar">
                <div className="SideBar__content">
                    <ProjectSwitcher />
                </div>
            </div>
            {children}
        </div>
    )
}
