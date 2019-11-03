import * as React from 'react'

type Props = { title: string, subtitle: string }

export const App: React.FC<Props> = ({ title, subtitle }) => (
	<div>
		<h1>{title}</h1>
		<h3>{subtitle}</h3>
	</div>
)