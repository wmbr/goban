/*
 * Copyright 2012-2020 Online-Go.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { _ } from "translate";

export type MessageID =
    | "error"
    | "error_submitting_move"
    | "loading"
    | "processing"
    | "self_capture_not_allowed"
    | "server_message"
    | "synchronization_error";

export function formatMessage(message_id: MessageID, parameters?: { [key: string]: any }): string {
    switch (message_id) {
        case "error":
            return _("Error") + ": " + (parameters?.error?.message || "unknown");
        case "error_submitting_move":
            return _("Error submitting move");
        case "loading":
            return _("Loading...");
        case "processing":
            return _("Processing...");
        case "self_capture_not_allowed":
            return _("Self-capture is not allowed");
        case "server_message":
            return parameters?.message || "Missing server message";
        case "synchronization_error":
            return _("Synchronization error, reloading");
    }

    return message_id;
}
