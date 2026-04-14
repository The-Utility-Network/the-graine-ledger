'use client';

import { useEffect, useRef } from 'react';

interface ContactFormProps {
    themeColor?: string;
}

export default function ContactForm({ themeColor = '#F97316' }: ContactFormProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const formSlug = "graine-ledger-form-5e26e79b";

    useEffect(() => {
        if (!containerRef.current) return;
        if (containerRef.current.querySelector('form')) return;

        const apiEndpoint = "https://crm.basalthq.com/api/forms/submit";

        const theme = {
            primaryColor: themeColor,
            backgroundColor: "rgba(13, 8, 0, 0.6)",
            textColor: "#ffffff",
            borderColor: "rgba(249, 115, 22, 0.2)",
            borderRadius: "12px",
            fontFamily: "inherit",
            buttonTextColor: "#000000",
            labelColor: "#fb923c",
            inputBgColor: "rgba(0, 0, 0, 0.6)"
        };

        const form = document.createElement("form");
        form.id = "crm-form-" + formSlug;
        form.style.cssText = `display:grid; grid-template-columns: repeat(12, 1fr); column-gap: 20px; row-gap: 24px; max-width:800px; margin:0 auto; font-family:${theme.fontFamily}; background:${theme.backgroundColor}; padding:40px; border-radius:${theme.borderRadius}; border: 1px solid ${theme.borderColor}; backdrop-filter: blur(10px); box-shadow: 0 0 20px rgba(0,0,0,0.5); transition: box-shadow 0.3s ease;`;

        const stakeholderRoleOptions = [
            "Brand Owner / Distiller",
            "Investor / Collector",
            "Retailer / Distributor",
            "Hospitality / Bar / Restaurant",
            "Content Creator / Influencer",
            "Press / Media",
            "General Inquiry"
        ];

        const areasOfInterestOptions = [
            "Private Label Whiskey",
            "Barrel Investment",
            "Custom Blending",
            "White Label Production",
            "Event Hosting at Lodge",
            "NFT Ownership",
            "Retail Partnership"
        ];

        const timelineOptions = [
            "Immediately",
            "Within 3 months",
            "3-6 months",
            "6-12 months",
            "Just exploring"
        ];

        const fields = [
            { "name": "first_name", "label": "First Name", "type": "text", "required": true, "placeholder": "John", "span": 6 },
            { "name": "last_name", "label": "Last Name", "type": "text", "required": true, "placeholder": "Doe", "span": 6 },
            { "name": "email", "label": "Email", "type": "email", "required": true, "placeholder": "john.doe@example.com", "span": 6 },
            { "name": "phone", "label": "Phone", "type": "phone", "required": false, "placeholder": "+1 555-123-4567", "span": 6 },
            { "name": "stakeholder_role", "label": "Stakeholder Role", "type": "select", "required": true, "placeholder": null, "span": 6, "options": stakeholderRoleOptions },
            { "name": "country", "label": "Country", "type": "text", "required": true, "placeholder": "United States", "span": 6 },
            { "name": "company_brand", "label": "Company / Brand", "type": "text", "required": false, "placeholder": "Your brand or company", "span": 6 },
            { "name": "website", "label": "Website", "type": "text", "required": false, "placeholder": "https://yourbrand.com", "span": 6 },
            { "name": "investment_level", "label": "Investment Interest", "type": "select", "required": false, "placeholder": null, "span": 6, "options": ["1 Barrel ($5K - $10K)", "2-5 Barrels ($10K - $50K)", "6-20 Barrels ($50K - $200K)", "Private Collection (20+ Barrels)"], "investorOnly": true },
            { "name": "project_timeline", "label": "Desired Timeline", "type": "select", "required": false, "placeholder": null, "span": 6, "options": timelineOptions, "investorOnly": true },
            { "name": "areas_of_interest", "label": "Areas of Interest", "type": "multi_select", "required": false, "placeholder": null, "span": 12, "options": areasOfInterestOptions },
            { "name": "message", "label": "How can we help?", "type": "textarea", "required": true, "placeholder": "Tell us about your goals, barrel preferences, and bottling plans.", "span": 12 }
        ];

        const allInputs: (HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)[] = [];
        const investorFieldWrappers: HTMLDivElement[] = [];

        const updateInvestorFieldsVisibility = (showInvestorFields: boolean) => {
            investorFieldWrappers.forEach(wrapper => {
                wrapper.style.display = showInvestorFields ? 'flex' : 'none';
                if (!showInvestorFields) {
                    const input = wrapper.querySelector('select, input') as HTMLSelectElement | HTMLInputElement;
                    if (input) input.value = '';
                }
            });
        };

        fields.forEach(function (field, index) {
            const wrapper = document.createElement("div");
            wrapper.style.gridColumn = `span ${field.span || 12}`;
            wrapper.style.position = "relative";
            wrapper.style.display = "flex";
            wrapper.style.flexDirection = "column";

            if ((field as any).investorOnly) {
                investorFieldWrappers.push(wrapper);
                wrapper.style.display = 'none';
            }

            const label = document.createElement("label");
            label.textContent = field.label + (field.required ? " *" : "");
            label.style.cssText = "display:block;margin-bottom:8px;font-weight:600;color:" + theme.labelColor + ";font-size:11px;letter-spacing: 0.15em;text-transform:uppercase;transition:color 0.3s ease;";
            wrapper.appendChild(label);

            let input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

            if (field.type === "textarea") {
                input = document.createElement("textarea");
                input.rows = 4;
                input.style.cssText = "width:100%;padding:14px 16px;border:1px solid " + theme.borderColor + ";border-radius:4px;font-size:14px;background:" + theme.inputBgColor + ";color:" + theme.textColor + ";box-sizing:border-box;outline:none;transition:all 0.3s ease;resize:vertical;";
            } else if (field.type === "select") {
                input = document.createElement("select");
                const options = (field as any).options || [];
                const defaultOpt = document.createElement("option");
                defaultOpt.text = "Select an option...";
                defaultOpt.value = "";
                defaultOpt.disabled = true;
                defaultOpt.selected = true;
                input.appendChild(defaultOpt);
                options.forEach((opt: string) => {
                    const el = document.createElement("option");
                    el.text = opt;
                    el.value = opt;
                    el.style.backgroundColor = "#1a1a1a";
                    el.style.color = theme.textColor;
                    input.appendChild(el);
                });
                input.style.cssText = "width:100%;padding:14px 16px;border:1px solid " + theme.borderColor + ";border-radius:4px;font-size:14px;background:" + theme.inputBgColor + ";color:" + theme.textColor + ";box-sizing:border-box;outline:none;transition:all 0.3s ease;cursor:pointer;";

                if (field.name === 'stakeholder_role') {
                    input.addEventListener('change', () => {
                        const isInvestor = input.value === 'Investor / Collector';
                        updateInvestorFieldsVisibility(isInvestor);
                    });
                }
            } else if (field.type === "multi_select") {
                const checkboxContainer = document.createElement("div");
                checkboxContainer.style.cssText = "display:flex;flex-wrap:wrap;gap:12px;";

                const options = (field as any).options || [];
                const hiddenInput = document.createElement("input");
                hiddenInput.type = "hidden";
                hiddenInput.name = field.name;
                wrapper.appendChild(hiddenInput);

                const selectedValues: Set<string> = new Set();

                options.forEach((opt: string) => {
                    const checkLabel = document.createElement("label");
                    checkLabel.style.cssText = `display:flex;align-items:center;gap:10px;padding:10px 14px;border:1px solid ${theme.borderColor};border-radius:6px;cursor:pointer;transition:all 0.2s ease;font-size:13px;color:${theme.labelColor};background:rgba(0,0,0,0.2);`;

                    const checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.value = opt;
                    checkbox.style.display = "none";

                    // Custom Box
                    const customBox = document.createElement("div");
                    customBox.style.cssText = `width:18px;height:18px;border:1.5px solid ${theme.borderColor};border-radius:4px;display:flex;align-items:center;justify-content:center;transition:all 0.2s ease;background:rgba(0,0,0,0.4);flex-shrink:0;`;

                    // Checkmark SVG
                    const checkmark = document.createElement("div");
                    checkmark.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="${theme.primaryColor}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                    checkmark.style.cssText = `opacity:0;transform:scale(0.5);transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);display:flex;align-items:center;justify-content:center;`;
                    
                    customBox.appendChild(checkmark);

                    checkbox.addEventListener('change', () => {
                        if (checkbox.checked) {
                            selectedValues.add(opt);
                            checkLabel.style.borderColor = theme.primaryColor;
                            checkLabel.style.backgroundColor = `${theme.primaryColor}15`;
                            checkLabel.style.color = theme.textColor;
                            customBox.style.borderColor = theme.primaryColor;
                            customBox.style.boxShadow = `0 0 10px ${theme.primaryColor}40`;
                            checkmark.style.opacity = "1";
                            checkmark.style.transform = "scale(1)";
                        } else {
                            selectedValues.delete(opt);
                            checkLabel.style.borderColor = theme.borderColor;
                            checkLabel.style.backgroundColor = "rgba(0,0,0,0.2)";
                            checkLabel.style.color = theme.labelColor;
                            customBox.style.borderColor = theme.borderColor;
                            customBox.style.boxShadow = "none";
                            checkmark.style.opacity = "0";
                            checkmark.style.transform = "scale(0.5)";
                        }
                        hiddenInput.value = Array.from(selectedValues).join(", ");
                    });

                    const text = document.createElement("span");
                    text.textContent = opt;

                    checkLabel.appendChild(checkbox);
                    checkLabel.appendChild(customBox);
                    checkLabel.appendChild(text);
                    checkboxContainer.appendChild(checkLabel);
                });

                wrapper.appendChild(checkboxContainer);
                input = hiddenInput;
            } else {
                input = document.createElement("input");
                input.type = field.type === "email" ? "email" : field.type === "phone" ? "tel" : "text";
                input.style.cssText = "width:100%;padding:14px 16px;border:1px solid " + theme.borderColor + ";border-radius:4px;font-size:14px;background:" + theme.inputBgColor + ";color:" + theme.textColor + ";box-sizing:border-box;outline:none;transition:all 0.3s ease;";
            }

            if (field.type !== "multi_select") wrapper.appendChild(input);

            input.name = field.name;
            input.required = field.required && !(field as any).investorOnly;
            if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
                if (field.placeholder) input.placeholder = field.placeholder;
            }

            if (field.type !== "multi_select") {
                input.onfocus = () => {
                    if (input instanceof HTMLSelectElement || input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
                        input.style.borderColor = theme.primaryColor;
                        input.style.boxShadow = `0 0 15px ${theme.primaryColor}20`;
                    }
                    label.style.color = theme.primaryColor;
                };
                input.onblur = () => {
                    if (input instanceof HTMLSelectElement || input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
                        input.style.borderColor = theme.borderColor;
                        input.style.boxShadow = "none";
                    }
                    label.style.color = theme.labelColor;
                };
            }

            allInputs.push(input);
            form.appendChild(wrapper);
        });

        const submit = document.createElement("button");
        submit.type = "submit";
        submit.textContent = "SUBMIT INQUIRY";
        submit.style.cssText = "background:" + theme.primaryColor + ";color:" + theme.buttonTextColor + ";border:none;padding:16px 28px;border-radius:8px;cursor:pointer;font-size:14px;font-weight:700;width:100%;margin-top:16px;letter-spacing:0.1em;text-transform:uppercase;transition:all 0.3s ease;";

        const submitWrapper = document.createElement("div");
        submitWrapper.style.gridColumn = "span 12";
        submitWrapper.appendChild(submit);
        form.appendChild(submitWrapper);

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            submit.disabled = true;
            submit.textContent = "TRANSMITTING...";
            
            const data: Record<string, any> = {};
            new FormData(form).forEach(function (v, k) { data[k] = v; });

            fetch(apiEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    form_slug: formSlug,
                    data: data,
                    source_url: window.location.href,
                    referrer: document.referrer
                })
            })
            .then(async (response) => {
                if (response.ok) {
                    form.innerHTML = `<div style='grid-column:span 12;text-align:center;padding:40px;'><div style='margin-bottom:20px;display:flex;justify-content:center;'><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="${theme.primaryColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div><h3 style='color:${theme.primaryColor};font-size:24px;margin-bottom:12px;font-weight:bold;'>ENTRY RECORDED</h3><p style='color:#fff;opacity:0.8;'>Your interest has been ledgered.</p></div>`;
                    return;
                }
                throw new Error("Server error");
            })
            .catch(() => {
                form.innerHTML = `<div style='grid-column:span 12;text-align:center;padding:40px;'><div style='margin-bottom:20px;display:flex;justify-content:center;'><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="${theme.primaryColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div><h3 style='color:${theme.primaryColor};font-size:24px;margin-bottom:12px;font-weight:bold;'>ENTRY RECORDED</h3><p style='color:#fff;opacity:0.8;'>Your interest has been ledgered.</p></div>`;
            });
        });

        containerRef.current.appendChild(form);
    }, [themeColor]);

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4 uppercase">
                    Own a <span className="text-tgl-amber">Piece of History</span>
                </h2>
                <p className="text-gray-400 mb-12 font-light">
                    Ready to craft your own whiskey legacy? Tell us about your vision.
                </p>
                <div id={"form-" + formSlug} ref={containerRef} className="w-full mx-auto" />
            </div>
        </section>
    );
}
