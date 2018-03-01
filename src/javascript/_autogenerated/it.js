const texts_json = {};
texts_json['IT'] = {"Day":"Giorno","Month":"Mese","Year":"Anno","Sorry,_an_error_occurred_while_processing_your_request_":"Siamo spiacenti, si è verificato un errore durante l'elaborazione della tua richiesta.","Please_[_1]log_in[_2]_or_[_3]sign_up[_2]_to_view_this_page_":"Ti preghiamo di effettuare il [_1]log in[_2] o [_3]registrarti[_2] per vedere questa pagina.","Open_a_Real_Account":"Apri un account vero","Open_a_Financial_Account":"Apri un account finanziario","Virtual_Account":"Account virtuale","Real_Account":"Account Reale","Investment_Account":"Account d'investimento","Gaming_Account":"Account di gioco","Sunday":"Domenica","Monday":"Lunedì","Tuesday":"Martedì","Wednesday":"Mercoledì","Thursday":"Giovedì","Friday":"Venerdì","Saturday":"Sabato","Su":"Dom","Mo":"Lun","Tu":"Mar","We":"Noi","Th":"Gio","Fr":"Ven","Sa":"Sab","January":"Gennaio","February":"Febbraio","March":"Marzo","April":"Aprile","May":"Mag","June":"Giugno","July":"Luglio","August":"Agosto","September":"Settembre","October":"Ottobre","November":"Novembre","December":"Dicembre","Jan":"Gen","Jun":"Giu","Jul":"Lug","Aug":"Ago","Sep":"Sett","Oct":"Ott","Dec":"Dic","Next":"Successivo","Previous":"Precedente","Hour":"Ora","Minute":"Minuto","Time_is_in_the_wrong_format_":"L'orario è in un formato errato.","Start_time":"Orario d'inizio","Entry_spot":"Punto d'ingresso","Purchase_Time":"Orario d'acquisto","Exit_spot":"Prezzo di uscita","End_time":"Orario di fine","Sell_time":"Orario di vendita","Charting_for_this_underlying_is_delayed":"I grafici per questo strumento sono differiti","year":"anno","month":"mese","week":"settimana","day":"giorno","days":"giorni","hour":"ora","hours":"ore","minute":"minuto","minutes":"minuti","second":"secondo","seconds":"secondi","ticks":"tick","Loss":"Perdita","Profit":"Profitto","Units":"Unità","Stake":"Puntata","Duration":"Durata","End_Time":"Orario di fine","Net_profit":"Profitto netto","Return":"Rendimento","Now":"Adesso","Contract_Confirmation":"Conferma del contratto","Your_transaction_reference_is":"Il tuo riferimento per le transazioni è","Rise/Fall":"Rialzo/Ribasso","Higher/Lower":"Superiore/Inferiore","In/Out":"Dentro/Fuori","Matches/Differs":"Combacia/Differisce","Even/Odd":"Pari/Dispari","Over/Under":"Sopra/Sotto","Up/Down":"Alto/Basso","Ends_Between/Ends_Outside":"Temina Dentro/Termina Fuori","Touch/No_Touch":"Tocca/Non Tocca","Stays_Between/Goes_Outside":"Resta Dentro/Esce","Potential_Payout":"Payout potenziale","Total_Cost":"Costo totale","Potential_Profit":"Profitto potenziale","View":"Mostra","Buy_price":"Prezzo d'acquisto","Final_price":"Prezzo finale","Long":"A lungo","Short":"Breve","Chart":"Grafico","Explanation":"Spiegazione","Last_Digit_Stats":"Statistiche sull'ultima cifra","Waiting_for_entry_tick_":"In attesa del tick d'ingresso.","Waiting_for_exit_tick_":"In attesa del tick d'uscita.","Please_log_in_":"Effettua il login.","All_markets_are_closed_now__Please_try_again_later_":"Al momento tutti i mercati sono chiusi. Si prega di riprovare più tardi.","Account_balance:":"Saldo dell'account:","Try_our_[_1]Volatility_Indices[_2]_":"Prova i nostri [_1]Indici di Volatilità[_2].","Try_our_other_markets_":"Prova i nostri altri mercati.","Session":"Sessione","Cryptocurrency":"Criptovaluta","Fiat_Currency":"Moneta Fiat","Close":"Chiudi","Payoff":"Risultato","Your_account_is_fully_authenticated_and_your_withdrawal_limits_have_been_lifted_":"Il tuo account è stato completamente convalidato e sono stati rimossi i tuoi limiti di prelievo.","Your_withdrawal_limit_is_[_1]_[_2]_":"Il tuo limite di prelievo è [_1] [_2].","Your_withdrawal_limit_is_[_1]_[_2]_(or_equivalent_in_other_currency)_":"Il tuo limite di prelievo è [_2] [_1] (oppure equivalente in altra valuta).","You_have_already_withdrawn_[_1]_[_2]_":"Hai già prelevato [_1] [_2].","You_have_already_withdrawn_the_equivalent_of_[_1]_[_2]_":"Hai già prelevato l'equivalente di [_1] [_2].","Therefore_your_current_immediate_maximum_withdrawal_(subject_to_your_account_having_sufficient_funds)_is_[_1]_[_2]_":"Pertanto il tuo attuale prelievo massimo immediato (soggetto alla disponibilità di fondi sufficienti nell'account) è pari a [_1] [_2].","Therefore_your_current_immediate_maximum_withdrawal_(subject_to_your_account_having_sufficient_funds)_is_[_1]_[_2]_(or_equivalent_in_other_currency)_":"Pertanto il tuo attuale prelievo massimo immediato (soggetto alla disponibilità di fondi sufficienti nell'account) è pari a [_1] [_2] (o equivalente in un'altra valuta).","Your_[_1]_day_withdrawal_limit_is_currently_[_2]_[_3]_(or_equivalent_in_other_currency)_":"Il tuo limite di prelievo giornaliero di [_1] è attualmente [_2] [_3] (oppure equivalente in un'altra valuta).","You_have_already_withdrawn_the_equivalent_of_[_1]_[_2]_in_aggregate_over_the_last_[_3]_days_":"Hai già prelevato l'equivalente complessivo di [_1] [_2] negli ultimi [_3] giorni.","Contracts_where_the_barrier_is_the_same_as_entry_spot_":"I contratti in cui la barriera è uguale al punto di ingresso.","Contracts_where_the_barrier_is_different_from_the_entry_spot_":"I contratti in cui la barriera è diversa dal punto di ingresso.","ATM":"Bancomat","Duration_up_to_7_days":"Durata massima di 7 giorni","Duration_above_7_days":"Durata superiore ai 7 giorni","Major_Pairs":"Coppie principali","This_field_is_required_":"Questo campo è obbligatorio.","Please_select_the_checkbox_":"Seleziona la casella corrispondente.","Please_accept_the_terms_and_conditions_":"Accetta i termini e le condizioni.","Only_[_1]_are_allowed_":"Sono consentiti solo [_1].","letters":"lettere","numbers":"numeri","space":"spazio","Sorry,_an_error_occurred_while_processing_your_account_":"Siamo spiacenti, si è verificato un errore durante l'elaborazione del tuo account.","Your_changes_have_been_updated_successfully_":"Le tue modifiche sono state aggiornate con successo.","Your_settings_have_been_updated_successfully_":"Le tue impostazioni sono state aggiornate con successo.","Please_select_a_country":"Seleziona un paese","Please_confirm_that_all_the_information_above_is_true_and_complete_":"Ti chiediamo di confermare che tutte le informazioni sopra riportate sono veritiere e complete.","verification_token":"token di verifica","email_address":"indirizzo email","Your_token_has_expired_or_is_invalid__Please_click_<a_href=\"[_1]\">here</a>_to_restart_the_verification_process_":"Il tuo token è scaduto o invalido. Clicca <a href=\"[_1]\">qui</a> per riavviare la procedura di verifica.","The_email_address_provided_is_already_in_use__If_you_forgot_your_password,_please_try_our_<a_href=\"[_1]\">password_recovery_tool</a>_or_contact_our_customer_service_":"L'indirizzo email fornito è già in uso. Se hai dimenticato la password, prova il nostro <a href=\"[_1]\">strumento di recupero della password</a> o contatta il nostro servizio clienti.","Password_should_have_lower_and_uppercase_letters_with_numbers_":"La password deve contenere lettere minuscole e maiuscole con numeri.","Password_is_not_strong_enough_":"La password non è sufficientemente forte.","Your_session_duration_limit_will_end_in_[_1]_seconds_":"Il limite di durata della tua sessione terminerà tra [_1] secondi.","Invalid_email_address_":"Indirizzo email non valido.","Thank_you_for_signing_up!_Please_check_your_email_to_complete_the_registration_process_":"Grazie per esserti registrato! Controlla la tua email per completare la procedura di registrazione.","Please_select":"Seleziona","Minimum_of_[_1]_characters_required_":"Sono richiesti minimo [_1] caratteri.","Please_confirm_that_you_are_not_a_politically_exposed_person_":"Ti chiediamo di confermare che non sei una persona politicamente esposta.","Opens":"Apre","Closes":"Chiude","Settles":"Liquida","Upcoming_Events":"Prossimi eventi","Closes_early_(at_21:00)":"Chiude in anticipo (alle 21:00)","Closes_early_(at_18:00)":"Chiude in anticipo (alle 18:00)","New_Year's_Day":"Capodanno","Christmas_Day":"Giorno di Natale","Fridays":"Venerdì","today":"oggi","today,_Fridays":"oggi, Venerdì","Please_select_a_payment_agent":"Seleziona un agente di pagamento","The_Payment_Agent_facility_is_currently_not_available_in_your_country_":"La funzione dell'Agente di pagamento al momento non è disponibile nel tuo paese.","Invalid_amount,_minimum_is":"Importo non valido, il minimo è","Invalid_amount,_maximum_is":"Importo non valido, il massimo è","Your_request_to_withdraw_[_1]_[_2]_from_your_account_[_3]_to_Payment_Agent_[_4]_account_has_been_successfully_processed_":"La tua richiesta di prelevare [_1] [_2] dal tuo account [_3] all'account dell'Agente di pagamento [_4] è stata elaborata con successo.","Up_to_[_1]_decimal_places_are_allowed_":"Sono ammessi fino a [_1] decimali.","Your_token_has_expired_or_is_invalid__Please_click_[_1]here[_2]_to_restart_the_verification_process_":"Il tuo token è scaduto o invalido. Clicca [_1]qui[_2] per riavviare la procedura di verifica.","New_token_created_":"Nuovo token creato.","The_maximum_number_of_tokens_([_1])_has_been_reached_":"Il numero massimo di token ([_1]) è stato raggiunto.","Name":"Nome","Last_Used":"Ultimo utilizzato","Scopes":"Scopi","Never_Used":"Mai utilizzato","Delete":"Elimina","Are_you_sure_that_you_want_to_permanently_delete_token":"Sei sicuro di voler eliminare definitivamente il token","Please_select_at_least_one_scope":"Seleziona almeno uno scopo","Guide":"Guida","Finish":"Termina","Select_your_market":"Seleziona il tuo mercato","Select_your_underlying_asset":"Scegli il tuo asset sottostante","Select_your_trade_type":"Seleziona la tua tipologia di trade","Adjust_trade_parameters":"Regola i parametri di trading","Predict_the_direction<br_/>and_purchase":"Prevedi la direzione<br />e acquista","Sorry,_this_feature_is_available_to_virtual_accounts_only_":"Siamo spiacenti, questa funzione è disponibile solo sugli account virtuali.","[_1]_[_2]_has_been_credited_to_your_Virtual_money_account_[_3]":"[_1] [_2] sono stati accreditati sul tuo Account di moneta virtuale [_3]","years":"anni","months":"mesi","weeks":"settimane","Your_changes_have_been_updated_":"Le tue modifiche sono state aggiornate.","Please_enter_an_integer_value":"Inserisci un numero intero","Session_duration_limit_cannot_be_more_than_6_weeks_":"Il limite di durata della sessione non può essere superiore a 6 settimane.","You_did_not_change_anything_":"Non hai modificato nulla.","Please_select_a_valid_date_":"Seleziona una data valida.","Please_select_a_valid_time_":"Seleziona un orario valido.","Time_out_cannot_be_in_the_past_":"La scadenza non può essere nel passato.","Time_out_must_be_after_today_":"La scadenza non può essere nella giornata di oggi.","Time_out_cannot_be_more_than_6_weeks_":"La scadenza non può essere superiore alle 6 settimane.","Exclude_time_cannot_be_less_than_6_months_":"Il periodo di esclusione non può essere inferiore a 6 mesi.","Exclude_time_cannot_be_for_more_than_5_years_":"Il periodo di esclusione non può essere superiore a 5 anni.","When_you_click_\"OK\"_you_will_be_excluded_from_trading_on_the_site_until_the_selected_date_":"Quando clicchi su \"OK\" verrai escluso dal trading sul sito fino alla data selezionata.","Old_password_is_wrong_":"La password vecchia è errata.","Ref_":"Rif.","Resale_not_offered":"La rivendita non è offerta","Date":"Data","Action":"Azione","Contract":"Contratto","Sale_Date":"Data della vendita","Sale_Price":"Prezzo di vendita","Total_Profit/Loss":"Profitto/Perdita totale","Your_account_has_no_trading_activity_":"Sul tuo account non c'è alcuna attività di trading.","Today":"Oggi","Details":"Dettagli","Sell":"Vendi","Buy":"Acquista","Virtual_money_credit_to_account":"Credito virtuale sull'account","This_feature_is_not_relevant_to_virtual-money_accounts_":"Questa funzione non è riferita agli account con denaro virtuale.","Japan":"Giappone","Questions":"Domande","True":"Vero","False":"Falso","There_was_some_invalid_character_in_an_input_field_":"Un campo di immissione testo conteneva uno o più caratteri non validi.","Please_follow_the_pattern_3_numbers,_a_dash,_followed_by_4_numbers_":"Segui il modello con 3 numeri, un trattino e 4 numeri.","Score":"Punteggio","You_need_to_finish_all_20_questions_":"Devi completare tutte le 20 domande.","Weekday":"Giorno feriale","Your_Application_is_Being_Processed_":"La tua richiesta è stata elaborata.","Processing_your_request___":"Elaborazione in corso della tua richiesta...","Please_check_the_above_form_for_pending_errors_":"Ti chiediamo di controllare il modulo sopra a causa di errori in sospeso.","Asian_Up":"Rialzo Asiatiche","Asian_Down":"Ribasso Asiatiche","Digit_Matches":"Cifra Uguale","Digit_Differs":"Cifra Diversa","Digit_Odd":"Cifra Dispari","Digit_Even":"Cifra Pari","Digit_Over":"Cifra Superiore","Digit_Under":"Cifra Inferiore","[_1]_[_2]_payout_if_[_3]_is_strictly_higher_than_or_equal_to_Barrier_at_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] è molto più alto o uguale alla Barriera vicino a [_4].","[_1]_[_2]_payout_if_[_3]_is_strictly_lower_than_Barrier_at_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] è molto più basso alla Barriera vicino a [_4].","[_1]_[_2]_payout_if_[_3]_does_not_touch_Barrier_through_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] non tocca la Barriera vicino a [_4].","[_1]_[_2]_payout_if_[_3]_touches_Barrier_through_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] tocca la Barriera vicino a [_4].","[_1]_[_2]_payout_if_[_3]_ends_on_or_between_low_and_high_values_of_Barrier_at_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] termina su o tra i valori inferiori e superiori del prezzo d'esercizio vicino a [_4].","[_1]_[_2]_payout_if_[_3]_ends_outside_low_and_high_values_of_Barrier_at_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] termina al di fuori dei valori inferiori e superiori del prezzo d'esercizio vicino a [_4].","[_1]_[_2]_payout_if_[_3]_stays_between_low_and_high_values_of_Barrier_through_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] termina tra i valori inferiori e superiori della Barriera vicino a [_4].","[_1]_[_2]_payout_if_[_3]_goes_outside_of_low_and_high_values_of_Barrier_through_close_on_[_4]_":"Il payout di [_1] [_2] se [_3] termina al di fuori dei valori inferiori e superiori della Barriera vicino a [_4].","Higher":"Superiore","Higher_or_equal":"Maggiore o uguale","Lower":"Inferiore","Touches":"Tocca","Does_Not_Touch":"Non tocca","Ends_Between":"Finisce tra","Ends_Outside":"Termina fuori","Stays_Between":"Resta Dentro","Goes_Outside":"Esce fuori","All_barriers_in_this_trading_window_are_expired":"Tutte le barriere in questa finestra di trading sono scadute","Remaining_time":"Tempo residuo","Market_is_closed__Please_try_again_later_":"Il mercato è chiuso. Si prega di riprovare più tardi.","This_symbol_is_not_active__Please_try_another_symbol_":"Questo simbolo non è attivo. Prova un altro simbolo.","Sorry,_your_account_is_not_authorised_for_any_further_contract_purchases_":"Siamo spiacenti, il tuo account non è autorizzato per qualsiasi altro acquisto di contratti.","Lots":"Lotti","Payout_per_lot_=_1,000":"Payout per lotto = 1.000","This_page_is_not_available_in_the_selected_language_":"Questa pagina non è disponibile nella lingua selezionata.","Select_market":"Seleziona il mercato","Number_of_ticks":"Numero di tick","Percentage":"Percentuale","Digit":"Cifra","Amount":"Importo","Deposit":"Deposita","Withdrawal":"Prelievo","Your_request_to_transfer_[_1]_[_2]_from_[_3]_to_[_4]_has_been_successfully_processed_":"La tua richiesta di trasferire [_1] [_2] da [_3] a [_4] è stata elaborata con successo.","Date_and_Time":"Data e orario","IP_Address":"Indirizzo IP","Status":"Stato","Successful":"Riuscito","Failed":"Non riuscito","Your_account_has_no_Login/Logout_activity_":"Sul tuo account non c'è alcuna attività di Login/Logout.","Please_enter_a_number_between_[_1]_":"Inserisci un numero compreso tra [_1].","[_1]_days_[_2]_hours_[_3]_minutes":"[_1] giorni [_2] ore [_3] minuti","Your_trading_statistics_since_[_1]_":"Le tue statistiche di trading dal [_1].","Unlock_Cashier":"Sblocca Cassa","Your_cashier_is_locked_as_per_your_request_-_to_unlock_it,_please_enter_the_password_":"Come da tua richiesta, la cassa è bloccata. Per sbloccarla, inserisci la password.","Lock_Cashier":"Blocca la Cassa","An_additional_password_can_be_used_to_restrict_access_to_the_cashier_":"Può essere utilizzata una password aggiuntiva per limitare l'accesso alla cassa.","Update":"Aggiorna","Sorry,_you_have_entered_an_incorrect_cashier_password":"Siamo spiacenti, hai inserito una password della cassa non corretta","You_have_reached_the_withdrawal_limit_":"Hai raggiunto il limite di prelievo.","Start_Time":"Orario di inizio","Entry_Spot":"Punto d'ingresso","Low_Barrier":"Barriera inferiore","Low_Barrier_([_1])":"Barriera inferiore ([_1])","High_Barrier":"Barriera superiore","High_Barrier_([_1])":"Barriera superiore ([_1])","Barrier_([_1])":"Barriera ([_1])","This_contract_won":"Questo contratto ha vinto","This_contract_lost":"Questo contratto ha perso","Barrier":"Barriera","Equals":"Uguale","Not":"No","Description":"Descrizione","Credit/Debit":"Credito/Debito","Balance":"Saldo","Purchase_Price":"Prezzo d'acquisto","Profit/Loss":"Profitto/Perdita","Contract_Information":"Informazioni del contratto","Contract_Expiry":"Scadenza del contratto","Contract_Sold":"Contratto venduto","Current":"Attuale","Open":"Apri","Closed":"Chiuso","Contract_has_not_started_yet":"Il contratto non è ancora iniziato","Price":"Prezzo","Spot_Time_(GMT)":"Orario di spot (GMT)","Current_Time":"Orario attuale","Exit_Spot_Time":"Orario del prezzo di uscita","Exit_Spot":"Prezzo di uscita","Indicative":"Indicativo","There_was_an_error":"Si è verificato un errore","Sell_at_market":"Vendi sul mercato","You_have_sold_this_contract_at_[_1]_[_2]":"Hai venduto questo contratto a [_1] [_2]","Your_transaction_reference_number_is_[_1]":"Il tuo numero di riferimento per le transazioni è [_1]","Note":"Nota","Contract_will_be_sold_at_the_prevailing_market_price_when_the_request_is_received_by_our_servers__This_price_may_differ_from_the_indicated_price_":"Il Contratto verrá venduto al prezzo di mercato prevalente nel momento in cui i nostri server ricevono la richiesta. Tale prezzo può differire rispetto al prezzo indicato.","Contract_ID":"ID del contratto","Contract_Type":"Tipo di Contratto","Transaction_ID":"ID della Transazione","Remaining_Time":"Tempo residuo","Barrier_Change":"Modifica della barriera","Audit_Page":"Pagina di verifica","View_Chart":"Visualizza grafico","Contract_Starts":"Il contratto inizia","Contract_Ends":"Il contratto termina","Start_Time_and_Entry_Spot":"Orario di Inizio e Entry Spot","Exit_Time_and_Exit_Spot":"Ora di Termine e Prezzo di Uscita","Please_select_a_value":"Seleziona un valore","You_have_not_granted_access_to_any_applications_":"Non hai accesso ad alcuna applicazione.","Permissions":"Autorizzazioni","Never":"Mai","Revoke_access":"Revocare l'accesso","Are_you_sure_that_you_want_to_permanently_revoke_access_to_application":"Sei sicuro di voler revocare definitivamente l'accesso all'applicazione","Transaction_performed_by_[_1]_(App_ID:_[_2])":"Transazione eseguita da [_1] (ID dell'app ID: [_2])","Admin":"Amministratore","Read":"Leggi","Payments":"Pagamenti","[_1]_Please_click_the_link_below_to_restart_the_password_recovery_process_":"[_1] Per riavviare la procedura di ripristino della password, clicca sul link qui sotto.","Your_password_has_been_successfully_reset__Please_log_into_your_account_using_your_new_password_":"La tua password è stata ripristinata con successo. Effettua il login sul tuo account utilizzando la tua nuova password.","Please_check_your_email_for_the_password_reset_link_":"Per il link di ripristino della password, controlla le tue email.","details":"dettagli","Withdraw":"Preleva","Insufficient_balance_":"Saldo non sufficiente.","This_is_a_staging_server_-_For_testing_purposes_only":"Questo è un server tecnico - Solo per scopo di test","The_server_<a_href=\"[_1]\">endpoint</a>_is:_[_2]":"Il server <a href=\"[_1]\">finale</a> è: [_2]","Sorry,_account_signup_is_not_available_in_your_country_":"Siamo spiacenti, la registrazione di un account non è disponibile nel tuo paese.","There_was_a_problem_accessing_the_server_":"Si è verificato un problema d'accesso al server.","There_was_a_problem_accessing_the_server_during_purchase_":"Durante l'acquisto si è verificato un problema d'accesso al server.","Should_be_a_valid_number_":"Deve essere un numero valido.","Should_be_more_than_[_1]":"Deve essere maggiore di [_1]","Should_be_less_than_[_1]":"Deve essere inferiore a [_1]","Should_be_between_[_1]_and_[_2]":"Deve essere compreso tra [_1] e [_2]","Only_letters,_numbers,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"Sono consentiti solo lettere, numeri, spazi, trattini, punti e apostrofi.","Only_letters,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"Sono consentite solo lettere, spazi, trattini, punti e apostrofi.","Only_letters,_numbers,_and_hyphen_are_allowed_":"Sono consentiti solo lettere, numeri e trattini.","Only_numbers,_space,_and_hyphen_are_allowed_":"Sono consentiti solo numeri, spazi e trattini.","Only_numbers_and_spaces_are_allowed_":"Sono consentiti solo numeri e spazi.","Only_letters,_numbers,_space,_and_these_special_characters_are_allowed:_-___'_#_;_:_(_)_,_@_/":"Sono consentiti solo lettere, numeri, spazi, trattini, e questi caratteri speciali: - . ' # ; : ( ) , @ /","The_two_passwords_that_you_entered_do_not_match_":"Le due password inserite non combaciano.","[_1]_and_[_2]_cannot_be_the_same_":"[_1] e 2% non possono essere uguali.","You_should_enter_[_1]_characters_":"Dovresti inserire [_1] caratteri.","Indicates_required_field":"Indica un campo obbligatorio","Verification_code_is_wrong__Please_use_the_link_sent_to_your_email_":"Il codice di verifica è errato. Ti chiedo di utilizzare il link inviato alla tua email.","The_password_you_entered_is_one_of_the_world's_most_commonly_used_passwords__You_should_not_be_using_this_password_":"La password inserita è una delle password più comunemente usate del mondo. Non dovresti usare questa password.","Hint:_it_would_take_approximately_[_1][_2]_to_crack_this_password_":"Suggerimento: servirebbero circa [_1][_2] per craccare la password.","thousand":"mila","million":"milioni","Should_start_with_letter_or_number,_and_may_contain_hyphen_and_underscore_":"Deve iniziare con una lettera o un numero e può contenere il trattino alto e basso.","Your_address_could_not_be_verified_by_our_automated_system__You_may_proceed_but_please_ensure_that_your_address_is_complete_":"Il tuo indirizzo non può essere verificato dal nostro sistema automatizzato. Puoi procedere, ma assicurati che il tuo indirizzo sia completo.","Validate_address":"Convalida l'indirizzo","Congratulations!_Your_[_1]_Account_has_been_created_":"Congratulazioni! Il tuo account [_1] è stato creato.","The_main_password_of_account_number_[_1]_has_been_changed_":"La password principale del numero di account [_1] è stata modificata.","[_1]_deposit_from_[_2]_to_account_number_[_3]_is_done__Transaction_ID:_[_4]":"Il deposito di [_1] da [_2] sul numero di account [_3] è stato effettuato. ID della transazione: [_4]","[_1]_withdrawal_from_account_number_[_2]_to_[_3]_is_done__Transaction_ID:_[_4]":"Il prelievo di [_1] dall'account numero [_2] su [_3] è stato eseguito. ID della transazione: [_4]","Your_cashier_is_locked_as_per_your_request_-_to_unlock_it,_please_click_<a_href=\"[_1]\">here</a>_":"Come da tua richiesta, la cassa è bloccata. Per sbloccarla, clicca <a href=\"[_1]\">qui</a>.","Your_cashier_is_locked_":"La tua Cassa é bloccata.","You_have_insufficient_funds_in_your_Binary_account,_please_<a_href=\"[_1]\">add_funds</a>_":"Non hai fondi sufficienti nel tuo account Binary, ti chiediamo di <a href=\"[_1]\">aggiungere fondi</a>.","Sorry,_this_feature_is_not_available_in_your_jurisdiction_":"Siamo spiacenti, questa funzione non è disponibile nella tua giurisdizione.","You_have_reached_the_limit_":"Hai raggiunto il limite.","Main_password":"Password principale","Investor_password":"Password dell'investitore","Current_password":"Password attuale","New_password":"Nuova password","Demo_Standard":"Demo standard","Demo_Advanced":"Demo Avanzato","Advanced":"Avanzato","Demo_Volatility_Indices":"Demo Indici di volatilità","Real_Standard":"Standard Reale","Real_Advanced":"Reale Avanzato","Real_Volatility_Indices":"Reale Indici di Volatilità","Change_Password":"Modifica Password","Demo_Accounts":"Account demo","Real-Money_Accounts":"Account di denaro reale","Our_MT5_service_is_currently_unavailable_to_EU_residents_due_to_pending_regulatory_approval_":"Il nostro servizio di MT5 non è attualmente disponibile per i residenti UE, questo è dovuto all'attesa di approvazione regolamentare.","for_MT5_Account":"per l' Account MT5","Current_balance":"Saldo attuale","Withdrawal_limit":"Limite per i prelievi","[_1]Authenticate_your_account[_2]_now_to_take_full_advantage_of_all_payment_methods_available_":"[_1]Convalida il tuo account[_2] ora per approfittare di tutti i metodi di pagamento disponibili.","Please_set_the_[_1]currency[_2]_of_your_account_":"Imposta la [_1]valuta[_2] del tuo account.","Please_set_your_30-day_turnover_limit_in_our_[_1]self-exclusion_facilities[_2]_to_remove_deposit_limits_":"Per rimuovere i limiti di deposito ti chiediamo di impostare il tuo limite di turnover per i 30 giorni, nelle [_1]funzioni di auto-esclusione[_2].","Please_set_[_1]country_of_residence[_2]_before_upgrading_to_a_real-money_account_":"Prima di passare a un account con soldi reali, imposta il [_1]paese di residenza[_2].","Please_complete_the_[_1]financial_assessment_form[_2]_to_lift_your_withdrawal_and_trading_limits_":"Per aumentare il limite dei prelievi e del trading, [_1]compila il modulo della valutazione finanziaria[_2].","Please_[_1]complete_your_account_profile[_2]_to_lift_your_withdrawal_and_trading_limits_":"Per aumentare il limite dei prelievi e del trading, [_1]completa il profilo del tuo account[_2].","Please_[_1]accept_the_updated_Terms_and_Conditions[_2]_to_lift_your_withdrawal_and_trading_limits_":"Per aumentare il limite dei prelievi e del trading, [_1]accetta i Termini e condizioni aggiornati[_2].","Your_account_is_restricted__Kindly_[_1]contact_customer_support[_2]_for_assistance_":"Il tuo account è limitato. Per ricevere assistenza, [_1]contatta l'assistenza clienti[_2].","Connection_error:_Please_check_your_internet_connection_":"Errore di connessione: verifica la tua connessione internet.","You_have_reached_the_rate_limit_of_requests_per_second__Please_try_later_":"Hai raggiunto il limite delle richieste per secondo. Per favore prova più tardi.","[_1]_requires_your_browser's_web_storage_to_be_enabled_in_order_to_function_properly__Please_enable_it_or_exit_private_browsing_mode_":"[_1] richiede che la funzione di archiviazione web del tuo browser venga attivato in modo da funzionare adeguatamente. Si prega di attivarlo o uscire dalla modalità di navigazione privata.","We_are_reviewing_your_documents__For_more_details_[_1]contact_us[_2]_":"Stiamo verificando i tuoi documenti. Per ulteriori informazioni [_1]contattaci[_2].","Your_web_browser_([_1])_is_out_of_date_and_may_affect_your_trading_experience__Proceed_at_your_own_risk__[_2]Update_browser[_3]":"Il tuo web browser ([_1]) non è aggiornato e potrebbe influire sulla tua esperienza di trading. Procedi a tuo rischio. [_2]Aggiorna il browser[_3]","Bid":"Offerta","Closed_Bid":"Offerta chiusa","Cancel_Bid":"Annulla offerta","Refund_Bid":"Rimborso dell'Offerta","Claim_Tokens":"Richiedi i Token","Ended":"Terminato","Pending":"In sospeso","The_ICO_is_currently_unavailable_":"La ICO non è attualmente disponibile.","Thank_you_for_participating_in_our_ICO__The_final_price_of_the_tokens_has_been_set_at_USD_X_XX_per_token__Investors_must_deposit_the_balance_owed_on_each_successful_bid_based_on_the_final_price_by_8_January_2018__You_can_proceed_to_claim_the_tokens_with_no_remaining_balance_":"Grazie per aver partecipato alla nostra ICO. Il prezzo finale dei token è stato fissato a USD x. XX a token. Gli investitori devono depositare il saldo di quanto dovuto su ogni offerta di successo, sulla base del prezzo finale, entro l' 8 gennaio 2018. Puoi procedere a richiedere i token senza nessun saldo rimanente.","Minimum_bid":"Offerta minima","The_auction_has_ended__As_the_minimum_target_was_not_reached,_all_investors_will_receive_a_refund_on_their_active_bids_":"L'asta è terminata. Non avendo raggiunto l'obiettivo minimo, tutti gli investitori riceveranno un rimborso sulle loro offerte attive.","Final_Price":"Prezzo finale","Total_Bids":"Totale Offerte","Price_Band":"Fascia di Prezzo","Create":"Crea","Commodities":"Materie prime","Indices":"Indici","Stocks":"Azioni","Volatility_Indices":"Indici di Volatilità","Set_Currency":"Imposta la valuta","Please_choose_a_currency":"Scegli una valuta","Create_Account":"Crea un account","Accounts_List":"Elenco degli account","[_1]_Account":"Account [_1]","None":"Nessuno","Investment":"Investimento","Gaming":"Gioco Online","Virtual":"Virtuale","Real":"Reale","Counterparty":"Controparte","This_account_is_disabled":"Questo account è disattivato","This_account_is_excluded_until_[_1]":"Questo account è escluso fino a [_1]","Invalid_document_format:_\"[_1]\"":"Formato di documento non valido: \"[_1]\"","File_([_1])_size_exceeds_the_permitted_limit__Maximum_allowed_file_size:_3MB":"La dimensione del file ([_1]) eccede il limite consentito. Dimensione massima del file: 3MB","ID_number_is_required_for_[_1]_":"È necessario un numero di identificazione per [_1].","Only_letters,_numbers,_space,_underscore,_and_hyphen_are_allowed_for_ID_number_":"Solo lettere, numeri, spazi, il trattino basso e il trattino sono consentiti per il numero ID.","Expiry_date_is_required_for_[_1]_":"La data di scadenza è necessaria per [_1].","Passport":"Passaporto","ID_card":"Carta d'identità","Driving_licence":"Patente di guida","Front_Side":"Fronte","Reverse_Side":"Retro","Front_and_reverse_side_photos_of_[_1]_are_required_":"Foto Fronte e Retro di [_1] sono necessarie.","[_1]Your_Proof_of_Identity_or_Proof_of_Address[_2]_did_not_meet_our_requirements__Please_check_your_email_for_further_instructions_":"[_1] La Prova di Identità o la Prova di Residenza[_2] non hanno soddisfatto le nostre esigenze. Controlla la tua e-mail per ulteriori istruzioni."};