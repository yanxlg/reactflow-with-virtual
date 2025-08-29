/**
 * @author: yanxianliang
 * @date: 2025-06-29 09:24
 * @desc: 类型定义
 *
 * Copyright (c) 2025 by yanxianliang, All Rights Reserved.
 */

export type CustomerNodeData = {
  label: string;
  ports: {
    items: Array<{
      id: string;
      group: 'TARGET' | 'CONDITIONS';
      data: {
        conditionType?: 'success' | 'failure' | 'timeout' | 'hangup';
        text?: string;
      }
    }>;
  }
}
