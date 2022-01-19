/*
 * Copyright 2021 liyiligang.
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

import {protoManage} from "../proto/manage";
import i18n from '../base/i18n'

export module defaultVal {
    export function getDefaultProtoNode():protoManage.Node {
        return protoManage.Node.create({
            Base: protoManage.Base.create(),
            Name: i18n.global.t('defaultVal.unknown')
        })
    }

    export function getDefaultProtoNodeFunc():protoManage.NodeFunc {
        return protoManage.NodeFunc.create({
            Base: protoManage.Base.create(),
            Name: i18n.global.t('defaultVal.unknown')
        })
    }

    export function getDefaultProtoNodeFuncCall():protoManage.NodeFuncCall {
        return protoManage.NodeFuncCall.create({
            Base: protoManage.Base.create(),
        })
    }

    export function getDefaultProtoNodeReport():protoManage.NodeReport{
        return protoManage.NodeReport.create({
            Base: protoManage.Base.create(),
            Name: i18n.global.t('defaultVal.unknown')
        })
    }

    export function getDefaultProtoNodeReportVal():protoManage.NodeReportVal{
        return protoManage.NodeReportVal.create({
            Base: protoManage.Base.create()
        })
    }

    export function getDefaultLanguage():string{
        let lan = navigator.systemLanguage || navigator.language;
        if(lan.toLowerCase().indexOf('zh')!==-1){
            return 'chs'
        }else if(lan.toLowerCase().indexOf('en')!==-1){
            return 'eng'
        }
        return 'eng'
    }
}