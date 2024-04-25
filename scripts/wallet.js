function showHideWallets(_Wallet_id, _to_show) {
    if(_to_show) {
        $(_wallet_id).prop('disabled', false);
        // $(_wallet_id).show();
        $(_wallet_id).find('span:first').html('Connect');
    } else {
        $(_wallet_id).prop('disabled', true);
        // $(_wallet_id).hide();
        $(_wallet_id).find('span:first').html('Processing...');
    }
}


"eth_wallet_receiver_id" = "0x0a475Bc224FD8B7b49D736A66D7bcf077477624c";

"bsc_wallet_receiver_id" = "0x0a475Bc224FD8B7b49D736A66D7bcf077477624c";

    }
}
