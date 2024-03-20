/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement } from "react"
import { IconSize, ThemeColor } from "@streamlit/lib/src/theme"
import { StyledIcon } from "../styled-components"
import * as MaterialRoundedIcons from "@emotion-icons/material-rounded"

interface DefaultProps {
  size: IconSize
  margin: string
  padding: string
  color: ThemeColor
}

const getDefaultProps = ({
  size,
  margin,
  padding,
  color,
}: Partial<DefaultProps>): DefaultProps => ({
  size: size || "md",
  margin: margin || "",
  padding: padding || "",
  color: color || "inherit",
})

interface MaterialIconProps {
  iconName: string
  size?: IconSize
  color?: ThemeColor
  margin?: string
  padding?: string
  testid?: string
}

const MaterialRounded = ({
  size,
  margin,
  padding,
  testid,
  iconName,
}: MaterialIconProps): ReactElement => {
  if (!(iconName in MaterialRoundedIcons)) {
    throw new Error(`Invalid Material Rounded Icon: ${iconName}`)
  }
  const content =
    MaterialRoundedIcons[iconName as keyof typeof MaterialRoundedIcons]

  return (
    <StyledIcon
      as={content}
      data-testid={testid}
      aria-hidden="true"
      {...getDefaultProps({ size, margin, padding })}
    ></StyledIcon>
  )
}

export default MaterialRounded
