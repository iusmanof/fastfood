import React, { ReactNode  } from "react";
import './FastFoodBlock.scss'

const  FastFoodBlock: React.FC<{ children: ReactNode }> = ({children}): React.ReactElement => {
    return <div className="fastfood-block">{children}</div>
}

export default  FastFoodBlock;