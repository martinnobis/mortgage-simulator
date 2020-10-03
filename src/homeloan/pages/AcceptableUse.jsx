import React from 'react';

import { emailMailto } from "./../utils"

const AcceptableUse = () => {
    return (
        <div>
            <h1>Acceptable use</h1>
            <p>
                The acceptable use policy ("Acceptable Use Policy", "AUP", "Policy") is an agreement between the Website Operator ("Website Operator", "us", "we" or "our") and you ("User", "you" or "your").
                This Policy sets forth the general guidelines and acceptable and prohibited uses of the homeloansimulator.com website and any of its products or services (collectively, "Website", "Site" or "Services").
            </p>

            <h2>Prohibited activities and uses</h2>
            <p>You may not use the Services to engage in activity that is illegal under applicable law, that is harmful to others, or that would subject us to liability, including, without limitation, in connection with any of the following, each of which is prohibited under this Policy:</p>
            <ul>
                <li>Disclosing sensitive personal information about others.</li>
                <li>Collecting, or attempting to collect, personal information about third parties without their knowledge or consent.</li>
                <li>Threatening harm to persons or property or otherwise harassing behavior.</li>
                <li>Infringing the intellectual property or other proprietary rights of others.</li>
                <li>Facilitating, aiding, or encouraging any of the above activities through our Services.</li>
            </ul>

            <h2>System abuse</h2>
            <p>
                Any User in violation of our Services security is subject to criminal and civil liability, as well as immediate account termination.
                Examples include, but are not limited to the following:
            </p>

            <ul>
                <li>Use or distribution of tools designed for compromising security of the Services.</li>
                <li>Intentionally or negligently transmitting files containing a computer virus or corrupted data.</li>
                <li>Accessing another network without permission, including to probe or scan for vulnerabilities or breach security or authentication measures.</li>
                <li>Unauthorized scanning or monitoring of data on any network or system without proper authorization of the owner of the system or network.</li>
            </ul>

            <h2>Service resources</h2>
            <p>You may not consume excessive amounts of the Services or use the Services in any way which results in performance issues or which interrupts the services for other Users. Prohibited activities that contribute to excessive use, include without limitation:</p>

            <ul>
                <li>Deliberate attempts to overload the Services and broadcast attacks (i.e. denial of service attacks).</li>
                <li>Engaging in any other activities that degrade the usability and performance of our Services.</li>
            </ul>

            <h2>Enforcement</h2>
            <p>We reserve our right to be the sole arbiter in determining the seriousness of each infringement and to immediately take corrective actions, including but not limited to:</p>

            <ul>
                <li>Disabling or removing any content which is prohibited by this Policy, including to prevent harm to others or to us or our Services, as determined by us in our sole discretion.</li>
                <li>Reporting violations to law enforcement as determined by us in our sole discretion.</li>
                <li>A failure to respond to an email from our abuse team within 2 days, or as otherwise specified in the communication to you, may result in the suspension or termination of your Services.</li>
            </ul>

            <p>Nothing contained in this Policy shall be construed to limit our actions or remedies in any way with respect to any of the prohibited activities. In addition, we reserve at all times all rights and remedies available to us with respect to such activities at law or in equity.</p>

            <h2>Reporting violations</h2>
            <p>If you have discovered and would like to report a violation of this Policy, please contact us immediately. We will investigate the situation and provide you with full assistance.</p>

            <h2>Changes and amendments</h2>
            <p>We reserve the right to modify this Policy or its terms relating to the Website or Services at any time, effective upon posting of an updated version of this Policy on the Website. When we do, we will revise the updated date at the bottom of this page. Continued use of the Website after any such changes shall constitute your consent to such changes.</p>

            <h2>Acceptance of this policy</h2>
            <p>You acknowledge that you have read this Policy and agree to all its terms and conditions. By using the Website or its Services you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to use or access the Website and its Services.</p>

            <h2>Contact</h2>
            <p>If you have any questions about this Policy, please get in contact by <a href={emailMailto}>sending an email.</a></p>
        </div>
    )
}

export default AcceptableUse